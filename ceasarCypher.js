var rot13=(str)=> { // LBH QVQ VG!
    const decodedstring= str.split('').map((charc)=>{
      if(charc.charCodeAt(0)>64 && charc.charCodeAt(0)<91){
        let newcharAscii= charc.charCodeAt(0) + 13;
        if(newcharAscii > 90){
          newcharAscii-=90;
          newcharAscii+= 64;
    
        }
        charc= String.fromCharCode(newcharAscii);
        
      }
      return charc;
    }).join('');
    return decodedstring;
    }
    
    // Change the inputs below to test
    console.log(rot13("SERR PBQR PNZC"));