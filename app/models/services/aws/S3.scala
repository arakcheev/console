/*
 * Copyright 2014. Arakcheev Artem (artem.arakcheev@phystech.edu)
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

package models.services.aws

import java.io.File

import com.amazonaws.auth.BasicAWSCredentials
import com.amazonaws.services.s3.AmazonS3Client
import com.amazonaws.services.s3.model._
import models.SecureGen
import play.api.Logger

import scala.concurrent.{Future, Promise}
import scala.util.Try

/**
 * @author Artem Arakcheev
 * @since 12.11.14
 */

object S3 {

  import models.Configuration.aws._

  import scala.concurrent.ExecutionContext.Implicits.global

  val s3 = new AmazonS3Client(new BasicAWSCredentials(id, secret))

  val bucketName = "business-framework"

  /**
   * Put file
   * @param file file to put
   * @param name file name
   * @param folder folder to put
   * @return
   */
  def put(file: File, name: String = "", folder: String = ""): Future[(String, PutObjectResult)] = {
    val result = Promise[(String, PutObjectResult)]()

    val pat = """(.*)[.]([^.]*)""".r
    val id = SecureGen.nextSessionId()
    val key = folder + "/" + id + (name match {
      case pat(fn, ext) =>
        "." + ext
      case _ => ""
    })

    def makeUrl() = {
      s"https://s3.eu-central-1.amazonaws.com/business-framework/$key"
    }


    result.complete(Try((makeUrl(), s3.putObject(new PutObjectRequest(bucketName, key, file).withCannedAcl(CannedAccessControlList.PublicRead)))))//todo: allow origin to domain only
    result.future.onComplete { _ =>
      file.delete()
      Logger.logger.debug(s"File deleted: ${file.getAbsolutePath}")
    }
    result.future
  }


}
