function renweb() {
    document.getElementById("renweb").innerHTML = "Renweb"
}
function noRenweb() {
    document.getElementById("renweb").innerHTML = ""
    document.getElementById("clase").innerHTML = ""
    
}
function specialNoRenweb() {
    document.getElementById("renweb").innerHTML = ""
    document.getElementById("teach").innerHTML = "";
    document.getElementById("zoom").innerHTML = "";
    document.getElementById("email").innerHTML = "";
    
    

}
function buss() {
    renweb()
    document.body.style.background = "linear-gradient(to right, #a6ff00, #00ffb3)";
    document.body.style.color = "black";
    document.getElementById('time').style.color = "black";
    document.getElementById("next").style.color = "black";        
    document.getElementById("email").style.color = "black";
    document.getElementById("renweb").style.color = "black";
    document.getElementById("zoom").style.color = "black";
    document.getElementById("clase").innerHTML = "Business";
    document.getElementById("teach").innerHTML = "Jazmin Gutierrez";
    document.getElementById("email").innerHTML = "Email";   
    document.getElementById("email").href = "mailto:jgutierrez@csa.edu.py";     
    document.getElementById('zoom').innerHTML = "Zoom" 
    document.getElementById('zoom').href = "https://us04web.zoom.us/j/73288450883?pwd=Sy8wbEs4ekp2enAvZ1JkZEdWeHpJQT09"
    document.getElementById("link").style.color = "black";

    //href = link
    //innerHTML = 'Zoom'
}
function PE() {
    renweb()
    var jorge;
    jorge=false
    document.body.style.background = "linear-gradient(to right, #00ccff, #00ff37)";
    document.body.style.color = "black";
    document.getElementById("time").style.color = "black";
    document.getElementById("next").style.color = "black";
    document.getElementById("clase").innerHTML = "Ed. Fisica";
    document.getElementById("email").innerHTML = "";   
    document.getElementById("email").style.color = "black";
    document.getElementById("renweb").style.color = "black";
    document.getElementById("zoom").style.color = "black";
    document.getElementById("email").href = "";    
    document.getElementById('zoom').innerHTML = "Zoom";
    document.getElementById("link").style.color = "black";
    if (jorge==true) {
    document.getElementById("teach").innerHTML = "Jorge Gaona";
    document.getElementById('zoom').href = "https://us04web.zoom.us/j/7665725728?pwd=ZSt3YW1uY2JMNDFBT1dFZFBvbHU5Zz09"
    } else if (jorge==false) {
    document.getElementById("teach").innerHTML = "Igor Delgado";
    document.getElementById('zoom').href = "https://us04web.zoom.us/j/7760608057?pwd=Y2dnUFgyYUQxamFLZFhQVDhKUis2UT09"
    }

}
function geol() {
    noRenweb()
    document.body.style.background = "linear-gradient(to right, #723700, #d87b02)";
    document.body.style.color = "white";
    document.getElementById("clase1").innerHTML = "Geologia CB";
    document.getElementById("teach1").innerHTML = "Sus Ulibarri";
    document.getElementById("email1").innerHTML = "Email";   
    document.getElementById("email1").style.color = "black";
    document.getElementById("renweb").innerHTML = "";   
    document.getElementById("renweb1").innerHTML = "renweb";   
    document.getElementById("renweb1").style.color = "black";
    document.getElementById("zoom1").style.color = "black";
    document.getElementById("email1").href = "mailto:sulibarri@csa.edu.py";    
    document.getElementById('zoom1').innerHTML = "Zoom" 
    document.getElementById("link").style.color = "black";
    document.getElementById('zoom1').href = "https://us04web.zoom.us/j/78641521000?pwd=NjNCZ3dlcmc0emhBdjJidlRYVjczUT09"
    
}
function math() {
    renweb()
    document.body.style.background = "linear-gradient(to right, #0044ff, #00ffb3)";
    document.body.style.color = "black";
    document.getElementById("time").style.color = "black";
    document.getElementById("next").style.color = "black";
    document.getElementById("clase").innerHTML = "Math";
    document.getElementById("teach").innerHTML = "Mr T";
    document.getElementById("email").innerHTML = "Email";   
    document.getElementById("email").style.color = "black";
    document.getElementById("renweb").style.color = "black";
    document.getElementById("link").style.color = "black";
    document.getElementById("zoom").style.color = "black";
    document.getElementById("email").href = "mailto:lsanabria@csa.edu.py";    
    document.getElementById('zoom').href = "https://us02web.zoom.us/j/89671926093?pwd=ZjIyellMM2IyVlRRTkY3ZFJadjFMUT09" 
    document.getElementById('zoom').innerHTML = "Zoom" 
}
function joelCS() {
    noRenweb()
    document.body.style.background = "linear-gradient(to right, #be6d2a, #c55050)";
    document.body.style.color = "black";
    document.getElementById("time").style.color = "black";
    document.getElementById("next").style.color = "black";

    document.getElementById("email2").innerHTML = "Email";   
    document.getElementById("email2").style.color = "black";
    document.getElementById("rw").style.color = "black";
    document.getElementById("zoom2").style.color = "black";
    document.getElementById("link").style.color = "black";
    document.getElementById("email2").href = "mailto:jbritez@csa.edu.py";  
    document.getElementById("email").style.color = "black";
    document.getElementById("renweb").style.color = "black";
    document.getElementById("zoom").style.color = "black";

    document.getElementById("teach2").innerHTML = "Joel";
    document.getElementById('zoom2').href = "https://us04web.zoom.us/j/5473521044?pwd=K3VOTHZLRmlCcjI2RFgzaHVKOExNQT09" 
    document.getElementById('zoom2').innerHTML = "Zoom" 
    document.getElementById('rw').innerHTML = "RenWeb" 
}
function selva() {
    renweb()
    document.body.style.background = "linear-gradient(to right, #a6ff00, #00ffb3)";
    document.body.style.color = "white";
    document.getElementById("time").style.color = "white";
    document.getElementById("next").style.color = "white";

    document.getElementById("email").innerHTML = "Email";   
    
    document.getElementById("email").style.color = "black";
    document.getElementById("link").style.color = "black";
    document.getElementById("renweb").style.color = "black";
    document.getElementById("zoom").style.color = "black";
    document.getElementById("email").href = "mailto:sbenitez@csa.edu.py";  

    document.getElementById("teach").innerHTML = "Selva Benitez";
    document.getElementById('zoom').href = "https://us04web.zoom.us/j/2406578074?pwd=ck11SzJYbzA0UDh1YmxYYm5kcFBrUT09" 
    document.getElementById('zoom').innerHTML = "Zoom" 
}
function selvaCB() {
    noRenweb()
    document.body.style.background = "linear-gradient(to right, #a6ff00, #00ffb3)";
    document.body.style.color = "white";
    document.getElementById("time").style.color = "white";
    document.getElementById("next").style.color = "white";

    document.getElementById("email1").innerHTML = "Email";   
    document.getElementById("email1").style.color = "black";
    document.getElementById("renweb").innerHTML = "";   
    document.getElementById("renweb1").innerHTML = "Renweb";   
    document.getElementById("renweb1").style.color = "black";
    document.getElementById("zoom1").style.color = "black";
    document.getElementById("email1").href = "mailto:sbenitez@csa.edu.py";  

    document.getElementById("teach1").innerHTML = "Selva Benitez";
    document.getElementById('zoom1').href = "https://us04web.zoom.us/j/2406578074?pwd=ck11SzJYbzA0UDh1YmxYYm5kcFBrUT09" 
    document.getElementById('zoom1').innerHTML = "Zoom" 

    document.getElementById("link").style.color = "black";
}
function psych() {
    renweb()
    document.body.style.background = "linear-gradient(to right, #0044ff, #00ffb3)";
    document.body.style.color = "black";
    document.getElementById("time").style.color = "black";
    document.getElementById("next").style.color = "black";

    document.getElementById("email").innerHTML = "Email";   
    document.getElementById("email").style.color = "black";
    document.getElementById("renweb").style.color = "black";
    document.getElementById("zoom").style.color = "black";
    document.getElementById("email").href = "mailto:rmongelos@csa.edu.py";  

    document.getElementById("clase").innerHTML = "Psicologia";
    document.getElementById("teach").innerHTML = "Roxanna";
    document.getElementById('zoom').innerHTML = "Zoom";
    document.getElementById('zoom').href = "https://us04web.zoom.us/j/6570000170?pwd=MFV6NlNRcEJxZWd2Zit4Z1F5N3JhUT09" 
    document.getElementById("link").style.color = "black";
}
function literatura() {
    renweb()
    document.body.style.background = "linear-gradient(to right, #d68504, #ff0000)";
    document.body.style.color = "black";
    document.getElementById("time").style.color = "white";
    document.getElementById("next").style.color = "white";

    document.getElementById("email").innerHTML = "Email";   
    document.getElementById("email").style.color = "black";
    document.getElementById("renweb").style.color = "black";
    document.getElementById("zoom").style.color = "black";
    document.getElementById("email").href = "mailto:obenitez@csa.edu.py";  

    document.getElementById("clase").innerHTML = "Literatura";
    document.getElementById("teach").innerHTML = "Olga";
    document.getElementById('zoom').href = "https://zoom.us/j/6554657772?pwd=Y2szMHc1elNyMGJCeU5DaDBPZmdzUT09"
    document.getElementById('zoom').innerHTML = "Zoom" 
    document.getElementById("link").style.color = "black";
}
function esol() {
    specialNoRenweb()
    document.body.style.background = "linear-gradient(to right, #c300ff, #003cff)";
    document.body.style.color = "black";
    document.getElementById("next").style.color = "white";
    document.getElementById("time").style.color = "white";
    document.getElementById("clase").innerHTML = "ESOL";
    document.getElementById("clase1").innerHTML = "CPE";
    document.getElementById("teach1").innerHTML = "Ms Aguilera";
    document.getElementById('zoom1').href = "https://zoom.us/j/99464731160" 
    document.getElementById('zoom1').innerHTML = "Zoom" 
    document.getElementById("email1").innerHTML = "Email";   
    document.getElementById("email1").style.color = "black";
    document.getElementById("renweb1").innerHTML = "Renweb";
    document.getElementById("renweb1").style.color = "black";
    document.getElementById("zoom1").style.color = "black";
    document.getElementById('email1').href = 'mailto:english.secondary@csa.edu.py'

    document.getElementById("clase2").innerHTML = "CPE 2";
    document.getElementById("teach2").innerHTML = "Mr Brice";
    document.getElementById('zoom2').href = "https://us04web.zoom.us/j/7603837806?pwd=TmgxZ2pSUklPdUVCc2VDdjE2L1l3dz09" 
    document.getElementById("zoom2").innerHTML = "Zoom"
    document.getElementById('rw').innerHTML = "RenWeb" 
    document.getElementById("email2").innerHTML = "Email";   
    document.getElementById("email2").style.color = "black";
    document.getElementById("rw").style.color = "black";
    document.getElementById("zoom2").style.color = "black";
    document.getElementById("email2").href = "mailto:nbrice@csa.edu.py";  


    document.getElementById("clase3").innerHTML = "CAE 1";
    document.getElementById("teach3").innerHTML = "Mr V";
    document.getElementById('zoom3').href = "https://us02web.zoom.us/j/7093269071" 
    document.getElementById("zoom3").innerHTML = "Zoom"
    document.getElementById('rw3').innerHTML = "RenWeb" 
    document.getElementById("email3").innerHTML = "Email";   
    document.getElementById("email3").style.color = "black";
    document.getElementById("rw3").style.color = "black";
    document.getElementById("zoom3").style.color = "black";
    document.getElementById("email3").href = "mailto:vvasconsellos@csa.edu.py";  

    document.body.style.backgroundColor = "blue";
    document.body.style.color = "white";
    document.getElementById("clase4").innerHTML = "CAE 2";
    document.getElementById("teach4").innerHTML = "Ms Rios";
    document.getElementById('zoom4').href = "https://us04web.zoom.us/j/8951997755?pwd=dStuQkVhT2ZYT0FUMDFiaVRlSmxNdz09" 
    document.getElementById("zoom4").innerHTML = "Zoom"
    document.getElementById('rw4').innerHTML = "RenWeb" 
    document.getElementById("email4").innerHTML = "Email";   
    document.getElementById("email4").style.color = "black";
    document.getElementById("rw4").style.color = "black";
    document.getElementById("zoom4").style.color = "black";
    document.getElementById("email4").href = "mailto:arios@csa.edu.py";  

    document.body.style.background = "linear-gradient(to right, #c300ff, #003cff)";
    document.body.style.color = "white";
    document.getElementById("clase5").innerHTML = "CAE 3";
    document.getElementById("teach5").innerHTML = "Mrs Vallese";
    document.getElementById('zoom5').href = "https://us04web.zoom.us/j/2155500372?pwd=WWlNQ0pKSzF0ZlV4L1RqdW9xYXFiQT09" 
    document.getElementById("zoom5").innerHTML = "Zoom"
    document.getElementById('rw5').innerHTML = "RenWeb" 
    document.getElementById("email5").innerHTML = "Email";   
    document.getElementById("email5").style.color = "black";
    document.getElementById("rw5").style.color = "black";
    document.getElementById("zoom5").style.color = "black";
    document.getElementById("email5").href = "mailto:vvallese@csa.edu.py";  

    document.getElementById("link").style.color = "black";

}
function global() {
    noRenweb()
    document.body.style.color = "white";
    document.getElementById("time").style.color = "white";
    document.getElementById("next").style.color = "white";
    document.getElementById("clase1").innerHTML = "Global Perspectives";
    document.getElementById("teach1").innerHTML = "Mr V";
    document.getElementById("email1").innerHTML = "Email";   
    document.getElementById("email1").style.color = "black";
    document.getElementById("renweb1").innerHTML = "Renweb";   
    document.getElementById("renweb1").style.color = "black";
    document.getElementById("zoom1").style.color = "black";
    document.getElementById('email1').href = 'mailto:vvasconsellos@csa.edu.py'

    document.getElementById('zoom1').href = "https://us02web.zoom.us/j/7093269071" 
    document.getElementById('zoom1').innerHTML = "Zoom" 
    document.getElementById("link").style.color = "black";
}
function ingles() {
    renweb()
    document.body.style.background = "linear-gradient(to right, #c300ff, #003cff)";
    document.body.style.color = "white";
    document.getElementById("time").style.color = "white";
    document.getElementById("next").style.color = "white";
    document.getElementById("clase").innerHTML = "Literature";
    document.getElementById("teach").innerHTML = "Mr V";
    document.getElementById('zoom').href = "https://us02web.zoom.us/j/7093269071" 
    document.getElementById('zoom').innerHTML = "Zoom" 
    document.getElementById("email").style.color = "black";
    document.getElementById("renweb").style.color = "black";
    document.getElementById("zoom").style.color = "black";
    document.getElementById("email").innerHTML = "Email";   
    document.getElementById('email').href = 'mailto:vvasconsellos@csa.edu.py'
    document.getElementById("link").style.color = "black";
}
function joel() {
    renweb()
    document.body.style.background = "linear-gradient(to right, #be6d2a, #c55050)";
    document.body.style.color = "white";
    document.getElementById("time").style.color = "white";
    document.getElementById("next").style.color = "white";
    document.getElementById("teach").innerHTML = "Joel Britez";
    document.getElementById("email").innerHTML = "Email";   
    document.getElementById("email").style.color = "black";
    document.getElementById("renweb").style.color = "black";
    document.getElementById("zoom").style.color = "black";
    document.getElementById("link").style.color = "black";
    document.getElementById('email').href = 'mailto:jbritez@csa.edu.py'
    document.getElementById('zoom').href = "https://us04web.zoom.us/j/5473521044?pwd=K3VOTHZLRmlCcjI2RFgzaHVKOExNQT09" 
    document.getElementById('zoom').innerHTML = "Zoom" 
}
function bio() {
    renweb()
    document.body.style.background = "linear-gradient(to right, #ff00d4, #0011ff)";
    document.body.style.color = "white";
    document.getElementById("time").style.color = "white";
    document.getElementById("next").style.color = "white";
    document.getElementById("clase").innerHTML = "Biology";
    document.getElementById("teach").innerHTML = "Ms Silvia";
    document.getElementById("email").innerHTML = "Email";   
    document.getElementById("email").style.color = "black";
    document.getElementById("renweb").style.color = "black";
    document.getElementById("zoom").style.color = "black";
    document.getElementById('email').href = 'mailto:sgotz@csa.edu.py'
    document.getElementById("link").style.color = "black";
    // LUCAS GIRALA
    document.getElementById('zoom').href = "https://us04web.zoom.us/j/3800031585" 
    document.getElementById('zoom').innerHTML = "Zoom" 
}
function biblia() {
    renweb()
    document.body.style.background = "linear-gradient(to right, #9dff00, #ffbb00)";
    document.body.style.color = "black";
    document.getElementById("time").style.color = "black";
    document.getElementById("next").style.color = "black";
    document.getElementById("clase").innerHTML = "Estudio Biblico";
    document.getElementById("teach").innerHTML = "Pastor Donald";
    document.getElementById("email").style.color = "black";
    document.getElementById("renweb").style.color = "black";
    document.getElementById("zoom").style.color = "black";
    document.getElementById("link").style.color = "black";
    document.getElementById("email").innerHTML = "";   
    document.getElementById('email').href = ''
    document.getElementById('zoom').href = "https://us05web.zoom.us/j/6510381521?pwd=aGdzM2dLblNPa1BrQ3h3RXF3VWd2UT09" 
    document.getElementById('zoom').innerHTML = "Zoom" 
}
function art() {
    renweb()
    document.body.style.background = "linear-gradient(to right, #0044ff, #00ffb3)";
    document.body.style.color = "black";
    document.getElementById("time").style.color = "black";
    document.getElementById("next").style.color = "black";

    document.getElementById("email").innerHTML = "Email";   
    document.getElementById("email").style.color = "black";
    document.getElementById("renweb").style.color = "black";
    document.getElementById("zoom").style.color = "black";
    document.getElementById('email').href = 'mailto:cjara@csa.edu.py'

    document.getElementById("clase").innerHTML = "Artes";
    document.getElementById("teach").innerHTML = "Ceci";
    document.getElementById('zoom').href = "https://us02web.zoom.us/j/6087866886?pwd=ckk3THRudDh1VHU3UWtQMHBuWDRydz09" 
    document.getElementById('zoom').innerHTML = "Zoom"
    document.getElementById("link").style.color = "black";
    
}
function ict() {
    noRenweb()
    document.body.style.background = "linear-gradient(to right, #ac9516, #ff582e)";
    document.body.style.color = "white";
    document.getElementById("clase2").innerHTML = "ICT";
    document.getElementById("teach2").innerHTML = "Sergio";
    document.getElementById("email2").innerHTML = "";   
    document.getElementById("email2").style.color = "black";
    document.getElementById("rw").style.color = "black";
    document.getElementById("zoom2").style.color = "black";
    document.getElementById('zoom2').href = "https://zoom.us/j/2730983712?pwd=ZHgzQlc2TTVLQ3BOSkNHWldtdTVadz09" 
    document.getElementById('rw').innerHTML = "RenWeb"
    document.getElementById('zoom2').innerHTML = "Zoom"  
    document.getElementById("link").style.color = "black";
}
function pintos() {
    noRenweb()
    document.body.style.background = "linear-gradient(to right, #ac9516, #ff582e)";
    document.body.style.color = "white";
    document.getElementById("time").style.color = "white";
    document.getElementById("next").style.color = "white";

    document.getElementById("clase2").innerHTML = "Invest. Social CS";
    document.getElementById("teach2").innerHTML = "Pintos";
    document.getElementById("email2").innerHTML = "Email";   
    document.getElementById("email2").style.color = "black";
    document.getElementById("rw").style.color = "black";
    document.getElementById("zoom2").style.color = "black";
    document.getElementById('email2').href = 'mailto:hpintos@csa.edu.py'
    document.getElementById('zoom2').href = "https://us04web.zoom.us/j/2313329485?pwd=K1lpZWNoU21TbHNFUU1BV3VvVFJadz09" 
    document.getElementById('rw').innerHTML = "RenWeb"
    document.getElementById('zoom2').innerHTML = "Zoom"  
    document.getElementById("link").style.color = "black";
}
function geom() {
    noRenweb()
    document.body.style.background = "linear-gradient(to right, #c300ff, #003cff)";
    document.body.style.color = "white";
    document.getElementById("clase1").innerHTML = "Geometria";
    document.getElementById("teach1").innerHTML = "Rosanna";
    document.getElementById("zoom1").innerHTML = "Zoom";
    document.getElementById("email1").innerHTML = "Email";   
    document.getElementById("email1").style.color = "black";
    document.getElementById("renweb1").innerHTML = "Renweb";   
    document.getElementById("renweb1").style.color = "black";
    document.getElementById("zoom1").style.color = "black";
    document.getElementById('email1').href = 'mailto:rportillo@csa.edu.py'
    document.getElementById('zoom1').href = "https://us04web.zoom.us/j/2491783834?pwd=bjlZNmxjcHQrYXVMUlFRZXFBczhmdz09" 
    document.getElementById("link").style.color = "black";
}
function cont() {
    noRenweb()
    document.body.style.background = "linear-gradient(to right, #c300ff, #003cff)";
    document.body.style.color = "white";
    document.getElementById("time").style.color = "white";
    document.getElementById("next").style.color = "white";
    document.getElementById("clase2").innerHTML = "Contabilidad";
    document.getElementById("teach2").innerHTML = "Laura ";
    document.getElementById("email2").innerHTML = "";   
    document.getElementById("email2").style.color = "black";
    document.getElementById("rw").style.color = "black";
    document.getElementById("zoom2").style.color = "black";
    document.getElementById('zoom2').href = "https://zoom.us/j/7119144960?pwd=d01nOVIvU0g0OTRoRCtCNHkvYytRUT09" 
    document.getElementById('rw').innerHTML = "RenWeb"
    document.getElementById('zoom2').innerHTML = "Zoom"  
    document.getElementById("link").style.color = "black";
}
function asamblea() {
    renweb()
    document.body.style.background = "linear-gradient(to right, #000000, #ffffff)";
    document.body.style.color = "white";
    document.getElementById("time").style.color = "white";
    document.getElementById("next").style.color = "black";
    document.getElementById("clase").innerHTML = "Asamblea";
    document.getElementById("teach").innerHTML = "???";
    document.getElementById("email").style.color = "black";
    document.getElementById("renweb").style.color = "black";
    document.getElementById("zoom").style.color = "black";
    document.getElementById("zoom").innerHTML = "Zoom";
    document.getElementById("email").innerHTML = "";   


    document.getElementById('zoom').href = "https://us02web.zoom.us/j/9749060600" 
    document.getElementById("link").style.color = "black";
}
function ariel() {   
    renweb() 
    document.body.style.background = "linear-gradient(to right, #0044ff, #00ffb3)";
    document.body.style.color = "black";
    document.getElementById("next").style.color = "black";
    document.getElementById("time").style.color = "black";
    document.getElementById("clase").innerHTML = "Estadistica";   
    document.getElementById("teach").innerHTML = "Ariel";
    document.getElementById("email").innerHTML = "Email";   
    document.getElementById("zoom").innerHTML = "Zoom";   
    document.getElementById("email").style.color = "black";
    document.getElementById("renweb").style.color = "black";
    document.getElementById("zoom").style.color = "black";
    document.getElementById('email').href = 'mailto:afernandez@csa.edu.py'
    document.getElementById('zoom').href = "https://us04web.zoom.us/j/9646311511?pwd=NVk5RjIzL1pwNXA3a2J6L2NqWEZvdz09" 
    document.getElementById("link").style.color = "black";
}
function arielCB() {    
    noRenweb()
    document.body.style.background = "linear-gradient(to right, #0044ff, #00ffb3)";
    document.body.style.color = "black";
    document.getElementById("next").style.color = "black";
    document.getElementById("time").style.color = "black";
    document.getElementById("clase1").innerHTML = "Logica Matematica";   
    document.getElementById("teach1").innerHTML = "Ariel";
    document.getElementById("email1").innerHTML = "Email";   
    document.getElementById("zoom1").innerHTML = "Zoom";   
    document.getElementById("email1").style.color = "black";
    document.getElementById("renweb1").innerHTML = "Renweb";   
    document.getElementById("renweb1").style.color = "black";
    document.getElementById("zoom1").style.color = "black";
    document.getElementById('email1').href = 'mailto:afernandez@csa.edu.py'
    document.getElementById("link").style.color = "black";
    document.getElementById('zoom1').href = "https://us04web.zoom.us/j/9646311511?pwd=NVk5RjIzL1pwNXA3a2J6L2NqWEZvdz09" 
}
function guara() {
    renweb()
    document.body.style.background = "linear-gradient(to right, #fbff00, #dd994a)";
    document.body.style.color = "black";
    document.getElementById("time").style.color = "black";
    document.getElementById("next").style.color = "black";

    document.getElementById("email").innerHTML = "Email";   
    document.getElementById("email").style.color = "black";
    document.getElementById("renweb").style.color = "black";
    document.getElementById("zoom").style.color = "black";
    document.getElementById('email').href = 'mailto:mmarin@csa.edu.py'
    document.getElementById("clase").innerHTML = "Guarani";
    document.getElementById("teach").innerHTML = "Miguelina";
    document.getElementById('zoom').href = "https://us02web.zoom.us/j/6944644514?pwd=ampjNTVtamU1djFiNVdEcWFMaFltQT09" 
    document.getElementById('zoom').innerHTML = "Zoom" 
    document.getElementById("link").style.color = "black";
}
function reset() {
    document.getElementById("clase1").innerHTML = "";
    document.getElementById("teach1").innerHTML = "";
    document.getElementById('zoom1').href = "" 
    document.getElementById("zoom1").innerHTML = ""
    document.getElementById('renweb1').innerHTML = "" 
    document.getElementById("email1").innerHTML = ""; 

    document.getElementById("clase2").innerHTML = "";
    document.getElementById("teach2").innerHTML = "";
    document.getElementById('zoom2').href = "" 
    document.getElementById("zoom2").innerHTML = ""
    document.getElementById('rw').innerHTML = "" 
    document.getElementById("email2").innerHTML = "";   


    document.getElementById("clase3").innerHTML = "";
    document.getElementById("teach3").innerHTML = "";
    document.getElementById('zoom3').href = "" 
    document.getElementById("zoom3").innerHTML = ""
    document.getElementById('rw3').innerHTML = "" 
    document.getElementById("email3").innerHTML = "";   


    document.getElementById("clase4").innerHTML = "";
    document.getElementById("teach4").innerHTML = "";
    document.getElementById('zoom4').href = "" 
    document.getElementById("zoom4").innerHTML = ""
    document.getElementById('rw4').innerHTML = "" 
    document.getElementById("email4").innerHTML = "";
    
    document.getElementById("clase5").innerHTML = "";
    document.getElementById("teach5").innerHTML = "";
    document.getElementById('zoom5').href = "" 
    document.getElementById("zoom5").innerHTML = ""
    document.getElementById('rw5').innerHTML = "" 
    document.getElementById("email5").innerHTML = "";   


} 
function error() {
    renweb()
    document.body.style.background = "linear-gradient(to right, #000000, #ffffff)";
    document.body.style.color = "white";
    document.getElementById('time').style.color = "white";
    document.getElementById('link').style.color = "black"
    document.getElementById("clase").innerHTML = "Recreo";
    document.getElementById('next').style.color = "black"
    document.getElementById('renweb').style.color = "black"
    document.getElementById("teach").innerHTML = ""
    document.getElementById('zoom').innerHTML = "" 
    document.getElementById('next').innerHTML = "" 
    document.getElementById("email").innerHTML = "";   

    reset()
}
function noschool() {
    renweb()
    document.body.style.background = "linear-gradient(to right, #000000, #ffffff)";
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    document.getElementById('link').style.color = "black"
    document.getElementById('next').style.color = "black"
    document.getElementById('renweb').style.color = "black"
    document.getElementById('time').style.color = "white"
    document.getElementById("clase").innerHTML = "No hay clase.";
    document.getElementById("teach").innerHTML = ""
    document.getElementById('zoom').innerHTML =  ""
    document.getElementById('next').innerHTML = "" 
    document.getElementById("email").innerHTML = "";   
    reset()
}



//clock
function addZeroes(num) {
    if (num < 10) {
        num = "0" + num
    }
    return num
}
function timeThing() {
    //creating elements
    rightNow = new Date()
    minute = rightNow.getMinutes(), hour = rightNow.getHours(), seconds = rightNow.getSeconds(), day = rightNow.getDay();
    total = ((hour*60)*60) + (minute*60) + seconds
    theTime=""
    theTime += addZeroes(hour) + ":" + addZeroes(minute) + ":" + addZeroes(seconds)
    alg()
    
    //displaying elements
    document.getElementById("time").innerHTML = theTime; 
    document.getElementById("title").innerHTML = theTime;
    timeClock()
}
function timeClock(){
    var refresh=1000; // Refresh rate in milli seconds
    mytime=setTimeout('timeThing()',refresh)
}
function AutoRefresh( t ) {
    setTimeout("location.reload(true);", t);
 }
timeThing()

//Algrotithm
function alg() {
    if (day == 1) {
        if (total < 26700) {
            noschool()
            document.getElementById('next').innerHTML = "7:30 = Devocional" 
        }else if (total < 27900) {
            reset()
            joel()
            document.getElementById("clase").innerHTML = "Devocional";
            document.getElementById('next').innerHTML = "7:50 = Business" 
        } else if (total < 33900) {
            reset()
            buss()
            document.getElementById('next').innerHTML = "9:30 = Recreo" 
            
        } else if (total < 34800) {
            reset()
            error()
            document.getElementById('next').style.color = "black" 
            document.getElementById('next').innerHTML = "9:45 = Antropologia/Selva CB" 
            
        } else if (total < 37200) {
            reset()
            selvaCB()
            document.getElementById("clase1").innerHTML = "Fisica/Quimica CB";
            document.getElementById('next').innerHTML = "10:25 = Psicologia" 
            joelCS()
            document.getElementById("clase2").innerHTML = "Antropologia";
        } else if (total < 39600) {
            psych()
            document.getElementById('next').innerHTML = "11:05 = Recreo" 
        } else if (total < 41100) {
            reset()
            error()
            document.getElementById('next').innerHTML = "11:30 = Maths"

        } else if (total < 43800) {
            reset()
            math()
            document.getElementById('next').innerHTML = "12:15 = ESOL" 
        } else if (total < 46800) {
            esol()
            document.getElementById('next').innerHTML = "13:00 = Recreo" 
            document.getElementById('zoom1').href = "https://zoom.us/j/99464731160" 

        } else if (total < 48300) {
            error()
            document.getElementById('next').innerHTML = "13:30 = Literature" 
            document.getElementById('next').style.color = "black" 
        } else if (total < 51900) {
            ingles()
            document.getElementById('next').innerHTML = "14:30 = Literatura" 
        } else if (total < 55500) {
            literatura()
            document.getElementById('next').innerHTML = "15:30 = Salida" 
        } else if (total < 86400) {
            noschool()
            document.getElementById('next').innerHTML = "" 
        }
    } else if (day == 2) {
        if (total < 27000) {
            noschool()
            document.getElementById('next').innerHTML = "7:35 = Filosofia" 
        }
        else if (total < 30600) {
            document.getElementById("clase").innerHTML = "Philosophy";
            joel()
            document.getElementById('next').innerHTML = "8:35 = Literatura" 
        }else if (total < 34200) {
            literatura()
            document.getElementById('next').innerHTML = "9:30 = Recreo" 
        } else if (total < 34800) {
            error()
            document.getElementById('next').innerHTML = "9:45 = Educacion Fisica" 
        } else if (total < 40200) {
            PE()
            document.getElementById('next').style.color = "white" 
            document.getElementById('next').innerHTML = "11:15 = Recreo" 
        } else if (total < 41700) {
            error()
            document.getElementById('next').innerHTML = "11:40 = Biology" 
        } else if (total < 44100) {
            bio()
            document.getElementById('next').innerHTML = "12:20 = Maths" 
        } else if (total < 46800) {
            math()
            document.getElementById('next').innerHTML = "13:00 = Recreo" 
        } else if (total < 48600) {
            error()
            document.getElementById('next').innerHTML = "13:30 = Biology" 
            document.getElementById('next').style.color = "black" 
        } else if (total < 50400) {
            bio()
            document.getElementById('next').innerHTML = "14:05 = Estudio Biblico" 
        } else if (total < 52800) {
            biblia()
            document.getElementById('next').innerHTML = "14:45 = Historia" 
        } else if (total < 55800) {
            joel()
            document.getElementById("clase").innerHTML = "Historia";
            document.getElementById('next').innerHTML = "15:30 = Salida" 
        } else if (total < 86400) {
            noschool()
            document.getElementById('next').innerHTML = "" 
        }
    } else if (day == 3) {
        if (total < 27000) {
            noschool() 
            document.getElementById('next').innerHTML = "7:35 = ESOL" 
        
        } else if (total < 30600) {
            esol()
            document.getElementById('zoom1').href = "https://zoom.us/j/97894358558"
            document.getElementById('next').innerHTML = "8:35 = Bible Study" 

        } else if (total < 33000) {
            reset()
            ingles()
            document.getElementById("clase").innerHTML = "Bible Study";
            document.getElementById('next').innerHTML = "9:30 = Recreo" 
        } else if (total < 34800) {
            reset()
            error()
            document.getElementById('next').style.color = "black" 
            document.getElementById('next').innerHTML = "9:45 = Artes" 
            
        } else if (total < 37200) {
            reset()
            art()
            document.getElementById('next').innerHTML = "10:25 = Global/ICT" 

        } else if (total < 39600) {
            reset()
            global()
            ict()
            document.getElementById('next').innerHTML = "11:05 = Recreo" 
        } else if (total < 41100) {
            reset()
            document.getElementById('next').style.color = "black" 
            error()
            document.getElementById('next').innerHTML = "11:30 = Historia"

        } else if (total < 43800) {
            reset()
            joel()
            document.getElementById('next').innerHTML = "12:15 = Maths" 
            document.getElementById('clase').innerHTML = "Historia"
        } else if (total < 46800) {
            math()
            document.getElementById('next').innerHTML = "13:00 = Recreo" 

        } else if (total < 48300) {
            error()
            document.getElementById('next').innerHTML = "13:30 = Literatura" 
            document.getElementById('next').style.color = "black" 
        } else if (total < 51900) {
            literatura()
            document.getElementById('next').innerHTML = "14:30 = Etica" 
        } else if (total < 55500) {
            joel()
            document.getElementById('clase').innerHTML = "Etica"
            document.getElementById('next').innerHTML = "15:30 = Salida" 
        } else if (total < 86400) {
            noschool()
            document.getElementById('next').innerHTML = "" 
        }
    } else if (day == 4) {
        if (total < 27000) {
            noschool() 
            document.getElementById('next').innerHTML = "7:35 = Geologia / Invest. Social" 
        
        } else if (total < 30600) {
            geol()
            pintos()
            document.getElementById('next').innerHTML = "8:35 = Geometria/Contabilidad" 

        } else if (total < 33000) {
            geom()
            cont()
            document.getElementById('next').innerHTML = "9:30 = Recreo" 
        } else if (total < 34800) {
            reset()
            error()
            document.getElementById('next').style.color = "black" 
            document.getElementById('next').innerHTML = "9:45 = Global/ICT" 
            
        } else if (total < 37200) {
            reset()
            global()
            ict()
            document.getElementById('next').innerHTML = "10:25 = Fisica" 

        } else if (total < 39600) {
            reset()
            selva()
            document.getElementById('clase').innerHTML = "Fisica"
            document.getElementById('clase').style.color = "black"
            document.getElementById('teach').style.color = "black"
            document.getElementById('next').innerHTML = "11:05 = Recreo"
             
        } else if (total < 41100) {
            reset()
            document.getElementById('next').style.color = "black" 
            error()
            document.getElementById('next').innerHTML = "11:30 = Literature"

        } else if (total < 43800) {
            reset()
            ingles()
            document.getElementById('next').innerHTML = "12:15 = Quimica" 
        } else if (total < 46800) {
            selva()
            document.getElementById('clase').innerHTML = "Quimica"
            document.getElementById('next').innerHTML = "13:00 = Recreo" 

        } else if (total < 48300) {
            error()
            document.getElementById('next').innerHTML = "13:30 = Biology" 
            document.getElementById('next').style.color = "black" 
        } else if (total < 51900) {
            bio()
            document.getElementById('next').innerHTML = "14:30 = Maths" 
        } else if (total < 55500) {
            math()
            document.getElementById('next').innerHTML = "15:30 = Salida" 
        } else if (total < 86400) {
            noschool()
            document.getElementById('next').innerHTML = "" 
        }
    } else if (day == 5) {
        if (total < 26700) {
            noschool()
            document.getElementById('next').innerHTML = "7:30 = Business" 
        }
        else if (total < 29100) {
            buss()
            document.getElementById('next').innerHTML = "8:10 = Asamblea" 
        }else if (total < 31500) {
            asamblea()
            document.getElementById('next').innerHTML = "8:50 = Literatura" 

        } else if (total < 33900) {
            reset()
            literatura()
            document.getElementById('next').innerHTML = "9:30 = Recreo" 
    
        } else if (total < 34800) {
            reset()
            error()
            document.getElementById('next').style.color = "black" 
            document.getElementById('next').innerHTML = "9:45 = Logica / Antrolopogia Cultural" 
        } else if (total < 37200) {
            reset()
            arielCB()
            joelCS()
            document.getElementById('clase1').innerHTML = "Logica Matematica"
            document.getElementById('clase2').innerHTML = "Antropologia Cultural"
            document.getElementById('next').innerHTML = "10:25 = Guarani" 
        } else if (total < 39600) {
            reset()
            guara()
            document.getElementById('next').innerHTML = "11:05 = Recreo"

        } else if (total < 41100) {
            reset()
            document.getElementById('next').style.color = "black" 
            error()
            document.getElementById('next').innerHTML = "11:30 = Estadistica"

        } else if (total < 43800) {
            reset()
            ariel()
            document.getElementById('next').innerHTML = "12:15 = Maths" 
        } else if (total < 46800) {
            reset()
            math()
            document.getElementById('next').innerHTML = "13:00 = Recreo" 

        } else if (total < 48300) {
            error()
            document.getElementById('next').innerHTML = "13:30 = ESOL" 
            document.getElementById('next').style.color = "black" 
        } else if (total < 51900) {
            esol()
            document.getElementById('zoom1').href = "https://zoom.us/j/93778798119"
            document.getElementById('next').innerHTML = "14:30 = Global / ICT" 
        } else if (total < 55500) {
            global()
            ict()
            document.getElementById('next').innerHTML = "15:30 = Salida" 
        } else if (total < 86400) {
            noschool()
            document.getElementById('next').innerHTML = "" 
        }
    } else {
        noschool()
    }
}  
console.log("%cHACKER", "color: red; font-size: 10vw");

//LUCAS GIRALA
