SystemJS.config({
  paths: {
    "github:": "jspm_packages/github/",
    "npm:": "jspm_packages/npm/",
    "app/": "src/js/"
  },
  browserConfig: {
    "baseURL": "/"
  },
  devConfig: {
    "map": {
      "ts-runtime": "npm:babel-runtime@6.26.0",
      "core-js": "npm:core-js@3.1.3",
      "plugin-babel": "npm:systemjs-plugin-babel@0.0.25",
      "text": "github:systemjs/plugin-text@0.0.11",
      "ts": "github:frankwallis/plugin-typescript@9.0.0",
      "typescript": "npm:typescript@3.5.1",
      "source-map-support": "npm:source-map-support@0.5.12"
    },
    "packages": {
      "npm:babel-runtime@6.26.0": {
        "map": {
          "core-js": "npm:core-js@2.6.9",
          "regenerator-runtime": "npm:regenerator-runtime@0.11.1"
        }
      },
      "npm:source-map-support@0.5.12": {
        "map": {
          "buffer-from": "npm:buffer-from@1.1.1",
          "source-map": "npm:source-map@0.6.1"
        }
      }
    }
  },
  transpiler: "plugin-babel",
  typescriptOptions: {
    "tsconfig": "tsconfig.app.json"
  },
  packages: {
    "app": {
      "main": "main.prod",
      "defaultExtension": "ts",
      "map": {
        "./components": "./components/index",
        "./components/app": "./components/app/index",
        "./components/landing": "./components/landing/index",
        "./components/quiz": "./components/quiz/index",
        "./components/quiz/answers": "./components/quiz/answers/index",
        "./components/quiz/done": "./components/quiz/done/index",
        "./components/quiz/nav": "./components/quiz/nav/index",
        "./components/quiz/questions": "./components/quiz/questions/index",
        "./components/quiz/status": "./components/quiz/status/index",
        "./contracts": "./contracts/index",
        "./directives": "./directives/index",
        "./facades": "./facades/index",
        "./helpers": "./helpers/index",
        "./modules": "./modules/index",
        "./routes": "./routes/index",
        "./services": "./services/index"
      },
      "meta": {
        "*.ts": {
          "loader": "ts"
        },
        "*.js": {
          "loader": "plugin-babel"
        },
        "*.css": {
          "loader": "text"
        },
        "*.html": {
          "loader": "text"
        }
      }
    }
  },
  map: {
    "babel-runtime": "npm:babel-runtime@6.26.0"
  }
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json",
    "github:*/*.json"
  ],
  map: {
    "@angular/common": "npm:@angular/common@8.0.0",
    "@angular/compiler": "npm:@angular/compiler@8.0.0",
    "@angular/core": "npm:@angular/core@8.0.0",
    "@angular/forms": "npm:@angular/forms@8.0.0",
    "@angular/http": "npm:@angular/http@7.2.15",
    "@angular/platform-browser": "npm:@angular/platform-browser@8.0.0",
    "@angular/platform-browser-dynamic": "npm:@angular/platform-browser-dynamic@8.0.0",
    "@angular/router": "npm:@angular/router@8.0.0",
    "angular2-materialize": "npm:angular2-materialize@15.1.10",
    "assert": "npm:jspm-nodelibs-assert@0.2.1",
    "buffer": "npm:jspm-nodelibs-buffer@0.2.3",
    "child_process": "npm:jspm-nodelibs-child_process@0.2.1",
    "constants": "npm:jspm-nodelibs-constants@0.2.1",
    "crypto": "npm:jspm-nodelibs-crypto@0.2.1",
    "css-animator": "npm:css-animator@2.3.1",
    "events": "npm:jspm-nodelibs-events@0.2.2",
    "fs": "npm:jspm-nodelibs-fs@0.2.1",
    "hammerjs": "npm:hammerjs@2.0.8",
    "http": "npm:jspm-nodelibs-http@0.2.0",
    "iscroll": "npm:iscroll@5.2.0",
    "jquery": "npm:jquery@2.2.4",
    "materialize-css": "npm:materialize-css@0.100.2",
    "module": "npm:jspm-nodelibs-module@0.2.1",
    "net": "npm:jspm-nodelibs-net@0.2.1",
    "os": "npm:jspm-nodelibs-os@0.2.2",
    "path": "npm:jspm-nodelibs-path@0.2.3",
    "process": "npm:jspm-nodelibs-process@0.2.1",
    "readline": "npm:jspm-nodelibs-readline@0.2.1",
    "reflect-metadata": "npm:reflect-metadata@0.1.13",
    "rxjs": "npm:rxjs@6.5.2",
    "stream": "npm:jspm-nodelibs-stream@0.2.1",
    "string_decoder": "npm:jspm-nodelibs-string_decoder@0.2.2",
    "timers": "npm:jspm-nodelibs-timers@0.2.1",
    "tty": "npm:jspm-nodelibs-tty@0.2.1",
    "url": "npm:jspm-nodelibs-url@0.2.1",
    "util": "npm:jspm-nodelibs-util@0.2.2",
    "vm": "npm:jspm-nodelibs-vm@0.2.1",
    "zlib": "npm:jspm-nodelibs-zlib@0.2.3",
    "zone.js": "npm:zone.js@0.9.1"
  },
  packages: {
    "npm:browserify-rsa@4.0.1": {
      "map": {
        "bn.js": "npm:bn.js@4.11.8",
        "randombytes": "npm:randombytes@2.1.0"
      }
    },
    "npm:buffer-xor@1.0.3": {
      "map": {}
    },
    "npm:core-util-is@1.0.2": {
      "map": {}
    },
    "npm:des.js@1.0.0": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.1"
      }
    },
    "npm:string_decoder@0.10.31": {
      "map": {}
    },
    "npm:url@0.11.0": {
      "map": {
        "punycode": "npm:punycode@1.3.2",
        "querystring": "npm:querystring@0.2.0"
      }
    },
    "npm:timers-browserify@1.4.2": {
      "map": {
        "process": "npm:process@0.11.10"
      }
    },
    "npm:jspm-nodelibs-http@0.2.0": {
      "map": {
        "http-browserify": "npm:stream-http@2.8.3"
      }
    },
    "npm:browserify-sign@4.0.4": {
      "map": {
        "create-hmac": "npm:create-hmac@1.1.7",
        "parse-asn1": "npm:parse-asn1@5.1.4",
        "elliptic": "npm:elliptic@6.4.1",
        "bn.js": "npm:bn.js@4.11.8",
        "create-hash": "npm:create-hash@1.2.0",
        "browserify-rsa": "npm:browserify-rsa@4.0.1",
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:hmac-drbg@1.0.1": {
      "map": {
        "hash.js": "npm:hash.js@1.1.7",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.1",
        "minimalistic-crypto-utils": "npm:minimalistic-crypto-utils@1.0.1"
      }
    },
    "npm:jspm-nodelibs-zlib@0.2.3": {
      "map": {
        "browserify-zlib": "npm:browserify-zlib@0.1.4"
      }
    },
    "npm:browserify-zlib@0.1.4": {
      "map": {
        "readable-stream": "npm:readable-stream@2.3.6",
        "pako": "npm:pako@0.2.9"
      }
    },
    "npm:jspm-nodelibs-timers@0.2.1": {
      "map": {
        "timers-browserify": "npm:timers-browserify@1.4.2"
      }
    },
    "npm:jspm-nodelibs-crypto@0.2.1": {
      "map": {
        "crypto-browserify": "npm:crypto-browserify@3.12.0"
      }
    },
    "npm:jspm-nodelibs-buffer@0.2.3": {
      "map": {
        "buffer": "npm:buffer@5.2.1"
      }
    },
    "npm:jspm-nodelibs-stream@0.2.1": {
      "map": {
        "stream-browserify": "npm:stream-browserify@2.0.2"
      }
    },
    "npm:jspm-nodelibs-url@0.2.1": {
      "map": {
        "url": "npm:url@0.11.0"
      }
    },
    "npm:jspm-nodelibs-os@0.2.2": {
      "map": {
        "os-browserify": "npm:os-browserify@0.3.0"
      }
    },
    "npm:cipher-base@1.0.4": {
      "map": {
        "safe-buffer": "npm:safe-buffer@5.1.2",
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:evp_bytestokey@1.0.3": {
      "map": {
        "safe-buffer": "npm:safe-buffer@5.1.2",
        "md5.js": "npm:md5.js@1.3.5"
      }
    },
    "npm:hash-base@3.0.4": {
      "map": {
        "safe-buffer": "npm:safe-buffer@5.1.2",
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:materialize-css@0.100.2": {
      "map": {
        "hammerjs": "npm:hammerjs@2.0.8",
        "jquery": "npm:jquery@2.2.4"
      }
    },
    "npm:crypto-browserify@3.12.0": {
      "map": {
        "randomfill": "npm:randomfill@1.0.4",
        "public-encrypt": "npm:public-encrypt@4.0.3",
        "inherits": "npm:inherits@2.0.3",
        "browserify-sign": "npm:browserify-sign@4.0.4",
        "create-hmac": "npm:create-hmac@1.1.7",
        "browserify-cipher": "npm:browserify-cipher@1.0.1",
        "diffie-hellman": "npm:diffie-hellman@5.0.3",
        "create-hash": "npm:create-hash@1.2.0",
        "create-ecdh": "npm:create-ecdh@4.0.3",
        "pbkdf2": "npm:pbkdf2@3.0.17",
        "randombytes": "npm:randombytes@2.1.0"
      }
    },
    "npm:miller-rabin@4.0.1": {
      "map": {
        "bn.js": "npm:bn.js@4.11.8",
        "brorand": "npm:brorand@1.1.0"
      }
    },
    "npm:jspm-nodelibs-string_decoder@0.2.2": {
      "map": {
        "string_decoder": "npm:string_decoder@0.10.31"
      }
    },
    "npm:readable-stream@2.3.6": {
      "map": {
        "string_decoder": "npm:string_decoder@1.1.1",
        "inherits": "npm:inherits@2.0.3",
        "core-util-is": "npm:core-util-is@1.0.2",
        "process-nextick-args": "npm:process-nextick-args@2.0.0",
        "util-deprecate": "npm:util-deprecate@1.0.2",
        "isarray": "npm:isarray@1.0.0",
        "safe-buffer": "npm:safe-buffer@5.1.2"
      }
    },
    "npm:randomfill@1.0.4": {
      "map": {
        "randombytes": "npm:randombytes@2.1.0",
        "safe-buffer": "npm:safe-buffer@5.1.2"
      }
    },
    "npm:string_decoder@1.1.1": {
      "map": {
        "safe-buffer": "npm:safe-buffer@5.1.2"
      }
    },
    "npm:browserify-aes@1.2.0": {
      "map": {
        "cipher-base": "npm:cipher-base@1.0.4",
        "create-hash": "npm:create-hash@1.2.0",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.3",
        "inherits": "npm:inherits@2.0.3",
        "safe-buffer": "npm:safe-buffer@5.1.2",
        "buffer-xor": "npm:buffer-xor@1.0.3"
      }
    },
    "npm:sha.js@2.4.11": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "safe-buffer": "npm:safe-buffer@5.1.2"
      }
    },
    "npm:asn1.js@4.10.1": {
      "map": {
        "bn.js": "npm:bn.js@4.11.8",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.1",
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:stream-http@2.8.3": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "builtin-status-codes": "npm:builtin-status-codes@3.0.0",
        "xtend": "npm:xtend@4.0.1",
        "to-arraybuffer": "npm:to-arraybuffer@1.0.1",
        "readable-stream": "npm:readable-stream@2.3.6"
      }
    },
    "npm:buffer@5.2.1": {
      "map": {
        "ieee754": "npm:ieee754@1.1.13",
        "base64-js": "npm:base64-js@1.3.0"
      }
    },
    "npm:create-hash@1.2.0": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "md5.js": "npm:md5.js@1.3.5",
        "cipher-base": "npm:cipher-base@1.0.4",
        "ripemd160": "npm:ripemd160@2.0.2",
        "sha.js": "npm:sha.js@2.4.11"
      }
    },
    "npm:create-hmac@1.1.7": {
      "map": {
        "create-hash": "npm:create-hash@1.2.0",
        "inherits": "npm:inherits@2.0.3",
        "cipher-base": "npm:cipher-base@1.0.4",
        "ripemd160": "npm:ripemd160@2.0.2",
        "sha.js": "npm:sha.js@2.4.11",
        "safe-buffer": "npm:safe-buffer@5.1.2"
      }
    },
    "npm:browserify-cipher@1.0.1": {
      "map": {
        "evp_bytestokey": "npm:evp_bytestokey@1.0.3",
        "browserify-des": "npm:browserify-des@1.0.2",
        "browserify-aes": "npm:browserify-aes@1.2.0"
      }
    },
    "npm:diffie-hellman@5.0.3": {
      "map": {
        "randombytes": "npm:randombytes@2.1.0",
        "bn.js": "npm:bn.js@4.11.8",
        "miller-rabin": "npm:miller-rabin@4.0.1"
      }
    },
    "npm:create-ecdh@4.0.3": {
      "map": {
        "bn.js": "npm:bn.js@4.11.8",
        "elliptic": "npm:elliptic@6.4.1"
      }
    },
    "npm:browserify-des@1.0.2": {
      "map": {
        "cipher-base": "npm:cipher-base@1.0.4",
        "inherits": "npm:inherits@2.0.3",
        "des.js": "npm:des.js@1.0.0",
        "safe-buffer": "npm:safe-buffer@5.1.2"
      }
    },
    "npm:ripemd160@2.0.2": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "hash-base": "npm:hash-base@3.0.4"
      }
    },
    "npm:elliptic@6.4.1": {
      "map": {
        "bn.js": "npm:bn.js@4.11.8",
        "inherits": "npm:inherits@2.0.3",
        "brorand": "npm:brorand@1.1.0",
        "hmac-drbg": "npm:hmac-drbg@1.0.1",
        "minimalistic-crypto-utils": "npm:minimalistic-crypto-utils@1.0.1",
        "hash.js": "npm:hash.js@1.1.7",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.1"
      }
    },
    "npm:rxjs@6.5.2": {
      "map": {
        "tslib": "npm:tslib@1.10.0"
      }
    },
    "npm:stream-browserify@2.0.2": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "readable-stream": "npm:readable-stream@2.3.6"
      }
    },
    "npm:pbkdf2@3.0.17": {
      "map": {
        "create-hash": "npm:create-hash@1.2.0",
        "create-hmac": "npm:create-hmac@1.1.7",
        "ripemd160": "npm:ripemd160@2.0.2",
        "safe-buffer": "npm:safe-buffer@5.1.2",
        "sha.js": "npm:sha.js@2.4.11"
      }
    },
    "npm:public-encrypt@4.0.3": {
      "map": {
        "create-hash": "npm:create-hash@1.2.0",
        "randombytes": "npm:randombytes@2.1.0",
        "safe-buffer": "npm:safe-buffer@5.1.2",
        "browserify-rsa": "npm:browserify-rsa@4.0.1",
        "parse-asn1": "npm:parse-asn1@5.1.4",
        "bn.js": "npm:bn.js@4.11.8"
      }
    },
    "npm:randombytes@2.1.0": {
      "map": {
        "safe-buffer": "npm:safe-buffer@5.1.2"
      }
    },
    "npm:md5.js@1.3.5": {
      "map": {
        "safe-buffer": "npm:safe-buffer@5.1.2",
        "inherits": "npm:inherits@2.0.3",
        "hash-base": "npm:hash-base@3.0.4"
      }
    },
    "npm:parse-asn1@5.1.4": {
      "map": {
        "browserify-aes": "npm:browserify-aes@1.2.0",
        "create-hash": "npm:create-hash@1.2.0",
        "pbkdf2": "npm:pbkdf2@3.0.17",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.3",
        "safe-buffer": "npm:safe-buffer@5.1.2",
        "asn1.js": "npm:asn1.js@4.10.1"
      }
    },
    "npm:hash.js@1.1.7": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.1"
      }
    },
    "npm:@angular/common@8.0.0": {
      "map": {
        "tslib": "npm:tslib@1.10.0"
      }
    },
    "npm:@angular/core@8.0.0": {
      "map": {
        "tslib": "npm:tslib@1.10.0"
      }
    },
    "npm:@angular/compiler@8.0.0": {
      "map": {
        "tslib": "npm:tslib@1.10.0"
      }
    },
    "npm:@angular/platform-browser@8.0.0": {
      "map": {
        "tslib": "npm:tslib@1.10.0"
      }
    },
    "npm:@angular/router@8.0.0": {
      "map": {
        "tslib": "npm:tslib@1.10.0"
      }
    },
    "npm:@angular/platform-browser-dynamic@8.0.0": {
      "map": {
        "tslib": "npm:tslib@1.10.0"
      }
    },
    "npm:@angular/http@7.2.15": {
      "map": {
        "tslib": "npm:tslib@1.10.0"
      }
    },
    "npm:@angular/forms@8.0.0": {
      "map": {
        "tslib": "npm:tslib@1.10.0"
      }
    }
  }
});
