/* Generated by the Nim Compiler v1.6.2 */
var framePtr = null;
var excHandler = 0;
var lastJSError = null;

function cstrToNimstr(c_33556805) {
      var ln = c_33556805.length;
  var result = new Array(ln);
  var r = 0;
  for (var i = 0; i < ln; ++i) {
    var ch = c_33556805.charCodeAt(i);

    if (ch < 128) {
      result[r] = ch;
    }
    else {
      if (ch < 2048) {
        result[r] = (ch >> 6) | 192;
      }
      else {
        if (ch < 55296 || ch >= 57344) {
          result[r] = (ch >> 12) | 224;
        }
        else {
            ++i;
            ch = 65536 + (((ch & 1023) << 10) | (c_33556805.charCodeAt(i) & 1023));
            result[r] = (ch >> 18) | 240;
            ++r;
            result[r] = ((ch >> 12) & 63) | 128;
        }
        ++r;
        result[r] = ((ch >> 6) & 63) | 128;
      }
      ++r;
      result[r] = (ch & 63) | 128;
    }
    ++r;
  }
  return result;
  

  
}

function eqStrings(a_33556932, b_33556933) {
        if (a_33556932 == b_33556933) return true;
    if (a_33556932 === null && b_33556933.length == 0) return true;
    if (b_33556933 === null && a_33556932.length == 0) return true;
    if ((!a_33556932) || (!b_33556933)) return false;
    var alen = a_33556932.length;
    if (alen != b_33556933.length) return false;
    for (var i = 0; i < alen; ++i)
      if (a_33556932[i] != b_33556933[i]) return false;
    return true;
  

  
}

function makeNimstrLit(c_33556802) {
      var result = [];
  for (var i = 0; i < c_33556802.length; ++i) {
    result[i] = c_33556802.charCodeAt(i);
  }
  return result;
  

  
}

function toJSStr(s_33556808) {
                    var Temporary5;
            var Temporary7;

  var result_33556809 = null;

    var res_33556843 = newSeq_33556826((s_33556808).length);
    var i_33556844 = 0;
    var j_33556845 = 0;
    Label1: do {
        Label2: while (true) {
        if (!(i_33556844 < (s_33556808).length)) break Label2;
          var c_33556846 = s_33556808[i_33556844];
          if ((c_33556846 < 128)) {
          res_33556843[j_33556845] = String.fromCharCode(c_33556846);
          i_33556844 += 1;
          }
          else {
            var helper_33556858 = newSeq_33556826(0);
            Label3: do {
                Label4: while (true) {
                if (!true) break Label4;
                  var code_33556859 = c_33556846.toString(16);
                  if ((((code_33556859) == null ? 0 : (code_33556859).length) == 1)) {
                  helper_33556858.push("%0");;
                  }
                  else {
                  helper_33556858.push("%");;
                  }
                  
                  helper_33556858.push(code_33556859);;
                  i_33556844 += 1;
                    if (((s_33556808).length <= i_33556844)) Temporary5 = true; else {                      Temporary5 = (s_33556808[i_33556844] < 128);                    }                  if (Temporary5) {
                  break Label3;
                  }
                  
                  c_33556846 = s_33556808[i_33556844];
                }
            } while (false);
++excHandler;
            Temporary7 = framePtr;
            try {
            res_33556843[j_33556845] = decodeURIComponent(helper_33556858.join(""));
--excHandler;
} catch (EXCEPTION) {
 var prevJSError = lastJSError;
 lastJSError = EXCEPTION;
 --excHandler;
            framePtr = Temporary7;
            res_33556843[j_33556845] = helper_33556858.join("");
            lastJSError = prevJSError;
            } finally {
            framePtr = Temporary7;
            }
          }
          
          j_33556845 += 1;
        }
    } while (false);
    if (res_33556843.length < j_33556845) { for (var i = res_33556843.length ; i < j_33556845 ; ++i) res_33556843.push(null); }
               else { res_33556843.length = j_33556845; };
    result_33556809 = res_33556843.join("");

  return result_33556809;

}
if (!Math.trunc) {
  Math.trunc = function(v) {
    v = +v;
    if (!isFinite(v)) return v;
    return (v - v % 1) || (v < 0 ? -0 : v === 0 ? v : 0);
  };
}


function newSeq_33556826(len_33556828) {
  var result_33556829 = [];

    result_33556829 = new Array(len_33556828); for (var i = 0 ; i < len_33556828 ; ++i) { result_33556829[i] = null; }
  return result_33556829;

}
var x_469762050 = cstrToNimstr(window.prompt("whos joe mama", ""));
if (!(eqStrings(x_469762050, []))) {
document.write(toJSStr((makeNimstrLit("<h1>") || []).concat(x_469762050 || [],makeNimstrLit("</h1>") || [])));
if (eqStrings(x_469762050, makeNimstrLit("barack obama"))) {
document.write("nigger");
}

}

