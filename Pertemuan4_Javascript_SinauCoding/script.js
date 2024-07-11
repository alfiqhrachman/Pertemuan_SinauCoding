console.log('Javascript')

var totalBus = 10;
var busOperation = 6;
var busNumber = 1;

for(busNumber = 1; busNumber <= totalBus; busNumber++) {
    if(busNumber <= busOperation) {
        console.log('Bus Transjakarta ' + busNumber + ' beroperasi dengan baik')
    } else if(busNumber == 8) {
        console.log('Bus Transjakarta ' + busNumber + ' sedang lembur')
    } else {
        console.log('Bus Transjakarta ' + busNumber + ' tidak beroperasi')
    }
}