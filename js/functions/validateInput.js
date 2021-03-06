module.exports = function validateInput(input) {
  // Whitelisted characters, /as they appear in the regex/:
  //
  //   Spaces,           / \u00a0/ (note the literal space before the non-breaking space unicode)
  //   Letters,          /a-zA-Z/
  //   Numbers,          /\d/
  //   Dashes,           /-\u2010\u2011\u2012\u2013\u2014\u2015\u2212\uff0d/
  //   Parentheses,      /\(\)/
  //   Comma,            /,/
  //   Period,           /\./
  //   Colon,            /:/
  //   Apostrophe,       /'\u2019/ (\u2019 is the unicode for the curly version)
  //   Forward slash,    /\//
  //   Section symbol,   /\u00a7/
  //   Paragraph symbol, /\u00b6/
  //   Ampersand,        /&/
  return /^[ \u00a0a-zA-Z\d-\u2010\u2011\u2012\u2013\u2014\u2015\u2212\uff0d\(\),\.:'\u2019\/\u00a7\u00b6&]*$/.test(input)
}
