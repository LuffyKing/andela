import math
def binarySearch(alist, item):
    first = 0
    last = len(alist)-1

    while first <= last:
        found = False
        middle = math.floor((first+last)/2)
        if alist[middle] == item:
            found = True
        else:
            if alist[middle] > item:
                last = middle-1
            elif alist[middle] < item:
                first = middle + 1
        if found:
            return 'Found item %s  at index %s' % (item, middle)
    return 'Not found'

