let c=0
let ct=document.getElementById("counter")
let pt=document.getElementById("para")
function count()
{
    c+=1
    ct.innerText=c
}
function save()
{
    
  ct.innerText=0
  let ptg="  - "
  let spa="  " 
  pt.innerText+=spa+=c+=ptg
  c=0
   
  console.log(pt)
 
}
function reset()
{
    ct.innerText=0
    pt.innerText="Previous Saves : "
}