import math
def swap(array, firstElement, secondElement):
    temp = array[firstElement]
    array[firstElement]= array[secondElement]
    array[secondElement] = temp

def selectionSort(array):
    for index in range(len(array)):
        minVar = index
        for indexTrav in range(index+1, len(array)):
            if array[minVar] > array[indexTrav]:
                minVar = indexTrav
        if minVar != index:
            swap(array,minVar,index)
    return array


def mergeSort(array):
    print('array:', array)
    if len(array) < 2:
        return array
    midpoint = int(len(array)/2)
    left = array[:midpoint]
    right = array[midpoint:]
    print(left, right)
    return mergeSortMerge(mergeSort(left), mergeSort(right))

def mergeSortMerge(left, right):
    newArray = []
    while left and right:
        if left[0] < right[0]:
            newArray.append(left.pop(0))

        else:
            newArray.append(right.pop(0))
    newArray = newArray+left+right

    return newArray

def bubbleSort(array):
    while True:
        swapCheck = False
        for index in range(len(array)-1):
            if array[index] > array[index+1]:
                swap(array, index, index+1)
                swapCheck = True
        if not swapCheck:
            break
    return array

def insertionSort(array):

    for index in range(1,len(array)):
        currItemIndex = index
        print(index)
        for indexInsert in range(index-1, -1, -1):
            print(indexInsert)
            if array[currItemIndex] < array[indexInsert]:
                swap(array, indexInsert,currItemIndex)
                currItemIndex -= 1
    return array

def quickSort(array, left=0, right=0):
    left = left or 0
    right = right or len(array)-1
    pivot = partitionHoare(array, left, right)
    if left < pivot-1:

        quickSort(array, left, pivot-1)

    if right > pivot:

        quickSort(array, pivot, right)
    return array

def partitionHoare(array, left, right):
    if len(array) < 3:
        arr = {array[left]: left, array[math.floor((left+right)/2)]: math.floor((left+right)/2), array[right]: right}
        keys = list(arr.keys())
        keys.sort()
        pivot = arr[keys[1]]
    else:
        pivot = math.floor((left+right)/2)
    while right >= left:
        while array[left] < array[pivot]:
            left += 1
        while array[right] > array[pivot]:
            right -= 1
        if right >= left:
            swap(array, right, left)
            left += 1
            right -= 1
    return left






