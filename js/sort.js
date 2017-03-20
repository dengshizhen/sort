var b=[6,5,3,1,8,7,2,4];
var n=b.length;
var heapsize;
window.onload=init();
function init(){
	var a=b;
	var c=b;
	var d=b
	bubble();
	bubble2();
	selecTion();
	insertion();
	insertion2();
	shell();
	mergesort(a,0,n-1);
	  for(var k=0;k<n;k++){
	document.getElementById("merge").innerHTML+=a[k]+","
		}
	  heapsort(c,n);
	  for(var k=0;k<n;k++){
	document.getElementById("heap").innerHTML+=c[k]+","
		}
	  quicksort(d,0,n-1);
	   for(var k=0;k<n;k++){
	document.getElementById("quick").innerHTML+=d[k]+","
		}
}
//冒泡排序

//  1比较相邻的元素，如果前一个比后一个大，就把它们两个调换位置。
//  2对每一对相邻元素作同样的工作，从开始第一对到结尾的最后一对。这步做完后，最后的元素会是最大的数。
//  3针对所有的元素重复以上的步骤，除了最后一个。
//  4持续每次对越来越少的元素重复上面的步骤，直到没有任何一对数字需要比较。
// 分类 -------------- 内部比较排序
// 数据结构 ---------- 数组
// 最差时间复杂度 ---- O(n^2)
// 最优时间复杂度 ---- 如果能在内部循环第一次运行时,使用一个旗标来表示有无需要交换的可能,可以把最优时间复杂度降低到O(n)
// 平均时间复杂度 ---- O(n^2)
// 所需辅助空间 ------ O(1)
// 稳定性 ------------ 稳定
 // 从小到大冒泡排序
// 每次最大元素就像气泡一样"浮"到数组的最后
 // 依次比较相邻的两个元素,使较大的那个向后移
 // 如果条件改成A[i] >= A[i + 1],则变为不稳定的排序算法
function bubble(){
	var a=b;
for(var i=0;i<n-1;i++){
	for(var j=0;j<n-1-i;j++)
	{
		if(a[j]>a[j+1]){
			exchange(a,j,j+1);
		}
	}
}
for( k in a){
	document.getElementById("bubble").innerHTML+=a[k]+","
}

}
//鸡尾酒排序
// 分类 -------------- 内部比较排序
// 数据结构 ---------- 数组
// 最差时间复杂度 ---- O(n^2)
// 最优时间复杂度 ---- 如果序列在一开始已经大部分排序过的话,会接近O(n)
// 平均时间复杂度 ---- O(n^2)
// 所需辅助空间 ------ O(1)
// 稳定性 ------------ 稳定
function bubble2(){
	var a=b;
	var left=0;
	var right=n-1;
	while(left<right){
		 // 前半轮,将最大元素放到后面
		for(var i=left;i<right;i++){
			if(a[i]>a[i+1]){
			exchange(a,i,i+1);
			}
		}
		right--;
		// 后半轮,将最小元素放到前面
		for(var j=right;j>left;j--){
			if(a[j-1]>a[j]){
				exchange(a,j-1,j)
			}
		}
		left++;
	}
	for( k in a){
	document.getElementById("bubble2").innerHTML+=a[k]+","
}
	
}
//选择排序
// 分类 -------------- 内部比较排序
// 数据结构 ---------- 数组
// 最差时间复杂度 ---- O(n^2)
// 最优时间复杂度 ---- O(n^2)
// 平均时间复杂度 ---- O(n^2)
// 所需辅助空间 ------ O(1)
// 稳定性 ------------ 不稳定

function selecTion(){
	var a=b;
	var min;
	// 已排序序列的末尾
	for(var i=0;i<=n-2;i++){
		min=i;
		 // 未排序序列
		for(var j=i+1;j<=n-1;j++){
			// 依次找出未排序序列中的最小值,存放到已排序序列的末尾
			if(a[j]<a[min]){
				min=j;
			}
		}
		if(min!=i){
			exchange(a,min,i)   // 该操作很有可能把稳定性打乱,所以选择排序是不稳定的排序算法
		}
	}
	for( k in a){
	document.getElementById("selection").innerHTML+=a[k]+","
}
	
}
//插入排序
//  1从第一个元素开始，该元素可以认为已经被排序
//  2取出下一个元素，在已经排序的元素序列中从后向前扫描
//  3如果该元素（已排序）大于新元素，将该元素移到下一位置
//  4重复步骤3，直到找到已排序的元素小于或者等于新元素的位置
//  5将新元素插入到该位置后
//  6重复步骤2~5
// 分类 ------------- 内部比较排序
// 数据结构 ---------- 数组
// 最差时间复杂度 ---- 最坏情况为输入序列是降序排列的,此时时间复杂度O(n^2)
// 最优时间复杂度 ---- 最好情况为输入序列是升序排列的,此时时间复杂度O(n)
// 平均时间复杂度 ---- O(n^2)
// 所需辅助空间 ------ O(1)
// 稳定性 ------------ 稳定
function insertion(){
	var a=b;
	var i,j,get;
	for(i=1;i<n;i++){      // 类似抓扑克牌排序
		get=a[i];          // 右手抓到一张扑克牌
		j=i-1;             // 拿在左手上的牌总是排序好的
		while(j>=0&&a[j]>get){  // 将抓到的牌与手牌从右向左进行比较
			a[j+1]=a[j];         // 如果该手牌比抓到的牌大,就将其右移
			j--;
		}
		a[j+1]=get;   // 直到该手牌比抓到的牌小(或二者相等),
		              //将抓到的牌插入到该手牌右边(相等元素的相对次序未变,所以插入排序是稳定的)
	}
	for( k in a){
	document.getElementById("insertion").innerHTML+=a[k]+","
}
	
}
// 分类 -------------- 内部比较排序
// 数据结构 ---------- 数组
// 最差时间复杂度 ---- O(n^2)
// 最优时间复杂度 ---- O(nlogn)
// 平均时间复杂度 ---- O(n^2)
// 所需辅助空间 ------ O(1)
// 稳定性 ------------ 稳定
function insertion2(){
	var a=b;
	var i,j,get,left,right,middle;
	for(i=1;i<n;i++){
		get=a[i];
		left=0;      // 拿在左手上的牌总是排序好的,所以可以用二分法
		right=i-1;
		while(left<=right){
			middle=(left+right)/2;
			if(a[middle]>get){
				right=middle-1;
			}else{
				left=middle+1;
			}
		}
		for(j=i-1;j>=left;j--){     // 将欲插入新牌位置右边的牌整体向右移动一个单位
			a[j+1]=a[j];
			
		}
		a[left]=get;
	}
	for(var k=0;k<n;k++){
		
	document.getElementById("insertion2").innerHTML+=a[k]+","

		}
}
// 分类 -------------- 内部比较排序
// 数据结构 ---------- 数组
// 最差时间复杂度 ---- 根据步长序列的不同而不同。已知最好的为O(n(logn)^2)
// 最优时间复杂度 ---- O(n)
// 平均时间复杂度 ---- 根据步长序列的不同而不同。
// 所需辅助空间 ------ O(1)
// 稳定性 ------------ 不稳定
function shell(){
	var a=b;
	var i,j,get;
	var h=0;
	while(h<=n){
		h=3*h+1;
	}
	while(h>=1){
		for(i=h;i<n;i++){
			j=i-h;
			get=a[i];
			while((j>=0)&&(a[j]>get)){
				a[j+h]=a[j];
				j=j-h;
			}
			a[j+h]=get;
		}
		h=(h-1)/3;
	}
	for(var k=0;k<n;k++){
		
	document.getElementById("shell").innerHTML+=a[k]+","

		}
	
}
//归并排序

//  1申请空间，使其大小为两个已经排序序列之和，该空间用来存放合并后的序列
//  2设定两个指针，最初位置分别为两个已经排序序列的起始位置
//  3比较两个指针所指向的元素，选择相对小的元素放入到合并空间，并移动指针到下一位置
//  4重复步骤3直到某一指针到达序列尾
//  5将另一序列剩下的所有元素直接复制到合并序列尾
// 分类 -------------- 内部比较排序
// 数据结构 ---------- 数组
// 最差时间复杂度 ---- O(nlogn)
// 最优时间复杂度 ---- O(nlogn)
// 平均时间复杂度 ---- O(nlogn)
// 所需辅助空间 ------ O(n)
// 稳定性 ------------ 稳定
function mergesort(a,left,right){
	var mid=parseInt((left+right)/2);//取整很重要
	if(left<right){   // 当待排序的序列长度为1时(left == right)，递归“开始回升”
		mergesort(a,left,mid);
		mergesort(a,mid+1,right);
		merge(a,left,mid,right);
	}
	return a;
}

	
function merge(a,left,mid,right){
	var temp=new Array()
	for(var l=0;l<right-left;l++){
		temp[i]=0;
	}
	var i=left;
    var j=mid+1;
    var k=0;
    // 依次比较两个子数组中的值，每次取出更小的那一个放入原数组
    while(i<=mid && j<=right){
    	if(a[i]<a[j]){
    		temp[k++]=a[i++];
    	}else{
    		temp[k++]=a[j++];
    	}
    }
    
    while(i<=mid){
    	temp[k++]=a[i++];
    }
    while(j<=right){
    	temp[k++]=a[j++];
    }
    for(var k2=0;k2<temp.length;k2++){
    	a[k2+left]=temp[k2];
    }
}
//堆排序

//  1创建一个堆
//  2把堆顶元素(最大值)和堆尾元素互换
//  3把堆的尺寸缩小1，并调用heapify(A, 0)从新的堆顶元素开始进行堆调整
//  4重复步骤2，直到堆的尺寸为1
// 分类 -------------- 内部比较排序
// 数据结构 ---------- 数组
// 最差时间复杂度 ---- O(nlogn)
// 最优时间复杂度 ---- O(nlogn)
// 平均时间复杂度 ---- O(nlogn)
// 所需辅助空间 ------ O(1)
// 稳定性 ------------ 不稳定
function heapify(a,i){    // 堆调整函数(这里使用的是最大堆)
	var leftchild=2*i+1;
	var rightchild=2*i+2;
	var largest;    // 选出当前结点与左右孩子之中的最大值
	if(leftchild<heapsize&&a[leftchild]>a[i]){
		largest=leftchild;
	}else{
		largest=i;
	}
	if(rightchild<heapsize&&a[rightchild]>a[largest]){
		largest=rightchild;
	}
	if(largest!=i){
		exchange(a,i,largest);  // 把当前结点和它的最大(直接)子节点进行交换
		heapify(a,largest);     // 递归调用，继续从当前结点向下进行堆调整
	}
}

function buildheap(a,n){
	heapsize=n;
	for(var i=parseInt(heapsize/2)-1;i>=0;i--){  // 对每一个非叶结点
		heapify(a,i);                             // 不断的堆调整
	}
}
function heapsort(a,n){
	buildheap(a,n);
	for(var i=n-1;i>=1;i--){
		exchange(a,0,i) // 将堆顶元素(当前最大值)与堆的最后一个元素互换(该操作很有可能把后面元素的稳定性打乱,所以堆排序是不稳定的排序算法)
		heapsize--;     // 从堆中去掉最后一个元素
		heapify(a,0);   // 从新的堆顶元素开始进行堆调整
	}
}
//快速排序
//  1从序列中挑出一个元素，作为"基准"(pivot).
//  2把所有比基准值小的元素放在基准前面，所有比基准值大的元素放在基准的后面（相同的数可以到任一边），这个称为分区(partition)操作。
//  3对每个分区递归地进行步骤1~3，递归的结束条件是序列的大小是0或1，这时整体已经被排好序了。
// 分类 ------------ 内部比较排序
// 数据结构 --------- 数组
// 最差时间复杂度 ---- 每次选取的基准都是最大的元素（或者每次都是最小），导致每次只划分出了一个子序列，需要进行n-1次划分才能结束递归，时间复杂度为O(n^2)
// 最优时间复杂度 ---- 每次选取的基准都能使划分均匀，只需要logn次划分就能结束递归，时间复杂度为O(nlogn)
// 平均时间复杂度 ---- O(nlogn)
// 所需辅助空间 ------ O(logn)～O(n),主要是递归造成的栈空间的使用(用来保存left和right等局部变量),取决于递归树的深度
//                   一般为O(logn),最差为O(n)（基本有序的情况）
// 稳定性 ---------- 不稳定
function partition(a,left,right){   // 划分函数
	var pivot=a[right];               // 选择最后一个元素作为基准
	var tail=left-1;                   // tail为小于基准的子数组最后一个元素的索引
	for(var i=left;i<right;i++){          // 遍历基准以外的其他元素
		if(a[i]<=pivot){                   // 把小于等于基准的元素放到前一个子数组中      
			tail++;
			exchange(a,tail,i);
		}
	}
	exchange(a,tail+1,right); // 最后把基准放到前一个子数组的后边,剩下的子数组既是大于基准的子数组
                             // 该操作很有可能把后面元素的稳定性打乱,所以快速排序是不稳定的排序算法
return tail+1;               // 返回基准的索引
}

function quicksort(a,left,right){
	var pivot_index;
	if(left<right){
		pivot_index=partition(a,left,right);
		quicksort(a,left,pivot_index-1);
		quicksort(a,pivot_index+1,right);
	}
	
}
function exchange(b,i,j){
	var temp=b[i];
	b[i]=b[j];
	b[j]=temp;
}


