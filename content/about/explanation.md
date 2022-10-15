---
kind: section
---
# About
Meet Base64 Decode and Encode, a simple online tool that does exactly what it says: decodes from Base64 encoding as well as encodes into it quickly and easily. Base64 encode your data without hassles or decode it into a human-readable format.

Base64 encoding schemes are commonly used when there is a need to encode binary data, especially when that data needs to be stored and transferred over media that are designed to deal with text. This encoding helps to ensure that the data remains intact without modification during transport. Base64 is used commonly in a number of applications including email via MIME, as well as storing complex data in XML or JSON.

**Advanced options**

*   Character set: In case of textual data, the encoding scheme does not contain the character set, so you have to specify which character set was used during the encoding process. It is usually UTF-8, but can be many others; if you are not sure then play with the available options or try the auto-detect option. This information is used to convert the decoded data to our website's character set so that all letters and symbols can be displayed properly. Note that this is irrelevant for files since no web-safe conversions need to be applied to them.
*   Decode each line separately: The encoded data usually consists of continuous text, so even newline characters are converted into their Base64 encoded forms. Prior to decoding, all non-encoded whitespaces are stripped from the input to safeguard the input's integrity. This option is useful if you intend to decode multiple independent data entries that are separated by line breaks.
*   Live mode: When you turn on this option the entered data is decoded immediately with your browser's built-in JavaScript functions, without sending any information to our servers. Currently, this mode supports only the UTF-8 character set.

**Safe and secure**

All communications with our servers come through secure SSL encrypted connections (https). We delete uploaded files from our servers immediately after being processed and the resulting downloadable file is deleted right after the first download attempt or 15 minutes of inactivity (whichever is shorter). We do not keep or inspect the contents of the submitted data or uploaded files in any way. Read our privacy policy below for more details.

**Completely free**

Our tool is free to use. From now on, you don't need to download any software for such simple tasks.

**Details of the Base64 encoding**

Base64 is a generic term for a number of similar encoding schemes that encode binary data by treating it numerically and translating it into a base-64 representation. The Base64 term originates from a specific MIME-content transfer encoding.

Design

The particular choice of characters to make up the 64 characters required for Base64 varies between implementations. The general rule is to choose a set of 64 characters that is both 1) part of a subset common to most encodings, and 2) also printable. This combination leaves the data unlikely to be modified in transit through systems such as email, which were traditionally not 8-bit clean. For example, MIME's Base64 implementation uses A-Z, a-z, and 0-9 for the first 62 values, as well as "+" and "/" for the last two. Other variations, usually derived from Base64, share this property but differ in the symbols chosen for the last two values; an example is the URL and filename safe "RFC 4648 / Base64URL" variant, which uses "-" and "\_".

Example

Here's a quote snippet from Thomas Hobbes's Leviathan:

"_Man is distinguished, not only by his reason, but ..._"

This is represented as an ASCII byte sequence and encoded in MIME's Base64 scheme as follows:

TWFuIGlzIGRpc3Rpbmd1aXNoZWQsIG5vdCBvbmx5IGJ5IGhpcyByZWFzb24sIGJ1dCAuLi4=

In the above quote the encoded value of _Man_ is _TWFu_. Encoded in ASCII, the letters "M", "a", and "n" are stored as the bytes 77, 97, 110, which are equivalent to "01001101", "01100001", and "01101110" in base-2. These three bytes are joined together in a 24 bit buffer producing the binary sequence "010011010110000101101110". Packs of 6 bits (6 bits have a maximum of 64 different binary values) are converted into 4 numbers (24 = 4 \* 6 bits) which are then converted to their corresponding values in Base64.

