/*rusczykcode*/

var write = new Function(str){
  document.write(str);
}
var input = new Function(type){
  x=raw_input();
  if (type===str){
    x=str(x)
  }
  else if (type===int){
    x=int(x);
  }
  else if (type===int){
    x=float(x);
  }
  else{
    return null;
    break;
  }
  return x;
  
}
