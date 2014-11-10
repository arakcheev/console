package models

import java.math.BigInteger
import java.security.SecureRandom

/**
 * Created by artem on 10.11.14.
 */
object SecureGen {
  private val random = new SecureRandom()

  def nextSessionId(): String =  {
    new BigInteger(130, random).toString(32)
  }
}
