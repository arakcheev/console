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

package models.entities

import models.db.MongoDB
import reactivemongo.bson.{BSONDocumentWriter, BSONDocument}

/**
 * @author Artem Arakcheev
 * @since 10.12.14
 */

trait Entity extends MongoDB {



  def insert[E](doc: E)(implicit writer: BSONDocumentWriter[E]) = {
    val bson = writer.write(doc)
    collection.insert[BSONDocument](bson).map { wr =>
      if (wr.inError) {
        None
      } else {
        Some(doc)
      }
    }
  }

}
