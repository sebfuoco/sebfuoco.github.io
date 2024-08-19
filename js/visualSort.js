let arrayRange = document.getElementById("ArrayChange");
let output = document.getElementById("value");
output.innerHTML = arrayRange.value;
arrayRange.oninput = function() { output.innerHTML = this.value; }

let speedRange = document.getElementById("SpeedChange");
let speed = document.getElementById("speed");
speed.innerHTML = speedRange.value;
speedRange.oninput = function() { speed.innerHTML = this.value; }

let height = [];
let swaps = 0; 
let compares = 0;
let randomArray = false;

function nullifier(){
	swaps = 0; compares = 0;
	document.getElementById("numOfSwaps").innerHTML = null;
	document.getElementById("numOfComp").innerHTML = null;
}

function fillArray(){
	const setHeight = [100, 90, 44, 58, 95, 40, 50, 1, 5, 54, 41, 19, 11,
 	21, 91, 75, 82, 2, 10, 29, 24, 13, 30, 94, 71, 43, 11, 54, 76, 75,
 	86, 14, 43, 22, 11, 23, 91, 95, 43, 31, 13, 97, 85, 42, 45, 56, 59,
 	91, 44, 22];
	height = [];
	if (randomArray === true) {
		for (let i = 0; i < arrayRange.value; i++) {
			height.push(Math.floor(Math.random()*100));
		}
	}
	else {
		for (let i = 0; i < arrayRange.value; i++) {
			height.push(setHeight[i]);
		}
	}
}

function draw(type){
	if (type == "numberChange"){
		for (let i = 0, j = height.length; i < j; i++){
        	Sort.data.datasets[0].data.pop();
        }
        fillArray();
        for (let i = 0; i < height.length; i++){
        	Sort.data.datasets[0].data.push(height[i]);
        }
	}
	else {
		fillArray();
		for (let i = 0; i < height.length; i++){
       		Sort.data.datasets[0].data[i] = height[i]; 
		}
	}
	Sort.update();
}

fillArray();
const colours = ['#4e73df', '#1cc88a', '#36b9cc', '#eb4034', '#ffce56', '#9966ff', '#d99b00','#f04dea'];
// bar graph
let ctx = document.getElementById('Sort').getContext('2d');
let Sort = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: height,
        datasets: [{
            label: 'Sorting Visualiser',
            data: height,
            backgroundColor: ["#eb4034", "#eb4034", "#eb4034", "#eb4034", "#eb4034", "#eb4034", "#eb4034", "#eb4034", "#eb4034", "#eb4034", "#eb4034", "#eb4034", "#eb4034", "#eb4034", "#eb4034", "#eb4034", "#eb4034", "#eb4034", "#eb4034", "#eb4034", "#eb4034", "#eb4034", "#eb4034", "#eb4034", "#eb4034", "#eb4034", "#eb4034", "#eb4034", "#eb4034", "#eb4034", "#eb4034", "#eb4034", "#eb4034", "#eb4034", "#eb4034", "#eb4034", "#eb4034", "#eb4034", "#eb4034", "#eb4034", "#eb4034", "#eb4034", "#eb4034", "#eb4034", "#eb4034", "#eb4034", "#eb4034", "#eb4034", "#eb4034", "#eb4034"],
        }],
    },
    options: {
    	tooltips: {
        	enabled: false
    	},
    	maintainAspectRatio: false,
    	legend: {
        	display: false
      	},
      	layout: {
        	padding: {
        		left: 10,
          		right: 25
        	},
      	},
        scales: {
            xAxes: [{
            	gridLines: {
              		display: false,
                	drawBorder: false
              	},
              	ticks: {
              		display: false,
              	},
            }],
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                },
                gridLines: {
                    color: "rgb(234, 236, 244)",
                    zeroLineColor: "rgb(234, 236, 244)",
                    drawBorder: false,
                    borderDash: [2],
                    zeroLineBorderDash: [2]
                }
            }]
        }
    }
});
// Sorting Algorithms
async function bubbleSort(){
	let len = height.length;
	for (let i = len-1; i>=0; i--) {
		for (let j = 1; j<=i; j++) {
			if (height[j-1] > height[j]) {
				let temp = height[j-1];
				height[j-1] = height[j];
				height[j] = temp;
       			Sort.data.datasets[0].data[j] = height[j]; 
       			Sort.data.datasets[0].data[j-1] = height[j-1];
       			Sort.data.datasets[0].backgroundColor[j] = "green";
				Sort.data.datasets[0].backgroundColor[j - 1] = "blue";
				Sort.update();
				await sleep(speedRange.value);
				Sort.data.datasets[0].backgroundColor[j] = "#eb4034";
				Sort.data.datasets[0].backgroundColor[j - 1] = "#eb4034";
       			Sort.update();
				await sleep(speedRange.value);
				document.getElementById("numOfSwaps").innerHTML = swaps += 1;
			}
			document.getElementById("numOfComp").innerHTML = compares += 1;
        }
    }
} 

async function selectionSort(){
	let minIdx, temp, len = height.length;
	for (let i = 0; i < len; i++) {
		minIdx = i;
		for(let j = i+1; j<len; j++) {
			Sort.data.datasets[0].backgroundColor[i] = "blue";
			Sort.data.datasets[0].backgroundColor[minIdx] = "green";
			Sort.update();
			if (height[j] < height[minIdx]) {
				await sleep(speedRange.value);
				Sort.data.datasets[0].backgroundColor[minIdx] = "#eb4034";
				Sort.update();
				minIdx = j;
				document.getElementById("numOfSwaps").innerHTML = swaps += 1;	
			}
			document.getElementById("numOfComp").innerHTML = compares += 1;
		}
		Sort.data.datasets[0].backgroundColor[i] = "#eb4034";
		temp = height[i];
		height[i] = height[minIdx];
		height[minIdx] = temp;
		Sort.data.datasets[0].data[i] = height[i];
		Sort.data.datasets[0].data[minIdx] = height[minIdx];
		Sort.data.datasets[0].backgroundColor[minIdx] = "#eb4034";
		Sort.update();
		document.getElementById("numOfSwaps").innerHTML = swaps += 1;
	}
}

async function insertionSort(height) {
  	for (let i = 1; i < height.length; i++) {
	    let j = i - 1;
	    let temp = height[i];
	    while(j >= 0 && height[j] > temp) {
	    	height[j + 1] = height[j];
	    	Sort.data.datasets[0].data[j + 1] = height[j];
	    	Sort.data.datasets[0].backgroundColor[j + 1] = "green";
	    	Sort.data.datasets[0].backgroundColor[j] = "blue";
	    	Sort.update();
	    	await sleep(speedRange.value);
	    	Sort.data.datasets[0].backgroundColor[j] = "#eb4034";
	    	Sort.data.datasets[0].backgroundColor[j + 1] = "#eb4034";
	      	j--;
	      	document.getElementById("numOfSwaps").innerHTML = swaps += 1;	
	      	document.getElementById("numOfComp").innerHTML = compares += 1;
	   	}
	   	height[j + 1] = temp;
	   	Sort.data.datasets[0].data[j + 1] = temp;
	   	document.getElementById("numOfComp").innerHTML = compares += 1;
	}
	Sort.update();
}

async function mergeSort(height) { // Bottom Up Merge sort
	let sorted = height.slice(),
		n = sorted.length,
		buffer = new Array(n);
	for (let size = 1; size < n; size *= 2) {
		for (let leftStart = 0; leftStart < n; leftStart += 2*size) {
			let left = leftStart,
				right = Math.min(left + size, n),
				leftLimit = right,
				rightLimit = Math.min(right + size, n),
				i = left;
			while (left < leftLimit && right < rightLimit) {
				if (sorted[left] <= sorted[right]) {
					Sort.data.datasets[0].data[i] = sorted[left];
					mergeSwap(i);
					buffer[i++] = sorted[left++];
				} else {
					Sort.data.datasets[0].data[i] = sorted[right];
					mergeSwap(i);
					buffer[i++] = sorted[right++];
				}	
				document.getElementById("numOfSwaps").innerHTML = swaps += 1;
				document.getElementById("numOfComp").innerHTML = compares += 1;
			}
			while (left < leftLimit) {
				Sort.data.datasets[0].data[i] = sorted[left];
				Sort.update();
				await sleep(speedRange.value);
				buffer[i++] = sorted[left++];
				document.getElementById("numOfComp").innerHTML = compares += 1;
			}
			while (right < rightLimit) {
				Sort.data.datasets[0].data[i] = sorted[right];
				Sort.update();
				await sleep(speedRange.value);
				buffer[i++] = sorted[right++];
				document.getElementById("numOfComp").innerHTML = compares += 1;
			}
		}
		let temp = sorted,
			sorted = buffer,
			buffer = temp;
	}
	console.log(sorted);
}

async function mergeSwap(i){
	Sort.data.datasets[0].backgroundColor[i] = "blue";
	Sort.data.datasets[0].backgroundColor[i + 1] = "green";
	Sort.update();
	await sleep(speedRange.value);
	Sort.data.datasets[0].backgroundColor[i] = "#eb4034";
	Sort.data.datasets[0].backgroundColor[i+ 1] = "#eb4034";
}

async function quickSort(height, left, right) { 
   	let pivot,
   	partitionIndex;
   	document.getElementById("numOfComp").innerHTML = compares += 1;
  	if(left < right){
    	pivot = right;
    	partitionIndex = await partition(height, pivot, left, right);
   		//sort left and right
   		await quickSort(height, left, partitionIndex - 1);
   		await quickSort(height, partitionIndex + 1, right);
  	}
  	return height;
}

async function partition(height, pivot, left, right){ 
   	let pivotValue = height[pivot],
    	partitionIndex = left;
	for (let i = left; i < right; i++) {
   		if(height[i] < pivotValue){
	      	await swap(height, i, partitionIndex);
	      	partitionIndex++;	
	      	document.getElementById("numOfSwaps").innerHTML = swaps += 1;
    	}
    	document.getElementById("numOfComp").innerHTML = compares += 1;
  	}
	await swap(height, right, partitionIndex);
	document.getElementById("numOfSwaps").innerHTML = swaps += 1;
	return partitionIndex;
}

async function swap(height, i, j){ 
	let temp = height[i];
	height[i] = height[j];
	height[j] = temp;
	Sort.data.datasets[0].backgroundColor[j] = "blue";
	Sort.data.datasets[0].backgroundColor[i] = "green";
	Sort.data.datasets[0].data[i] = height[i];
	Sort.data.datasets[0].data[j] = height[j];
	Sort.update();
	await sleep(speedRange.value);
	Sort.data.datasets[0].backgroundColor[j] = "#eb4034";
	Sort.data.datasets[0].backgroundColor[i] = "#eb4034";
	Sort.update();
}
// Waits a select period of time
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

$(document).ready(function(){
	$("#RandomArray").click(function() {
		nullifier();
		randomArray = true;
		draw("");
	});
	$("#Array").click(function() {
		nullifier();
		randomArray = false;
		draw("");
	});
	// Sorting algorithms
	$("#ArrayChange").change(function() {
		nullifier();
		draw("numberChange");
	});
	$("#BubbleSort").click(function(){
		nullifier();
		bubbleSort();
	});
	$("#SelectionSort").click(function(){
		nullifier();
		selectionSort();
	});
	$("#InsertionSort").click(function(){
		nullifier();
		insertionSort(height);
	});
	$("#MergeSort").click(function(){
		nullifier();
		mergeSort(height);
	});
	$("#QuickSort").click(function(){
		nullifier();
		quickSort(height, 0, (height.length - 1));
	});
});