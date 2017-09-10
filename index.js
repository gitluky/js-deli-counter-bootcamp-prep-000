katzDeliLine = []

function takeANumber(line,name){
  line.push(name)
  return `Welcome ${name}. You are number ${line.indexOf(name)+1} in line.`
}

function nowServing(line){
  if (line.length < 1){
    return "The line is currently empty"
  }
  else{
    var currentCustomer = line[0]
    line.shift()
    return `Currently serving ${currentCustomer}.`
  }
}

function currentLine(line){
  var queue = []
  for (var i = 0; i < line.length; i++){
      queue.push(`${i+1}. ${line[i]} `)
    }
  return 'The line is currently: ' + queue
}
