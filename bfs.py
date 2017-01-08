

class Queue:
    def __init__(self):
        self.items = []

    def isEmpty(self):
        return self.items == []

    def enqueue(self, item):
        self.items.insert(0,item)

    def dequeue(self):
        return self.items.pop()

    def size(self):
        return len(self.items)




graph = {}
graph["name"] = ["a1", "a2", "a3" ]
graph["a2"] = ["b1", "b2"]
graph["b2"] = ["c1", "c2", "c3" ]

graph["c1"] = []
graph["c2"] = []
graph["c3"] = []


def search(name):
    search_queue = Queue()
    search_queue =  search_queue + graph[name]
    searched = []
    while search_queue:
        person = search_queue.popleft()
        if not person in searched:
            if person_is_seller(person):
                print person + " is successful"
                return true
            else:
                search_queue += graph[person]
                searched.append(person)
    return false

search("b2")
