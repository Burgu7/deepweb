function xorEncryptDecrypt(data, key) {
    let output = "";
    for (let i = 0; i < data.length; i++) {
        output += String.fromCharCode(data.charCodeAt(i) ^ key.charCodeAt(i % key.length));
    }
    return output;
  }
