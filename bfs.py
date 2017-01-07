
import heapq

class PriorityQueue:
    def __init__(self):
        self._queue = []
        self._index = 0

    def push(self, item, priority):
        heapq.heappush(self._queue, (-priority, self._index, item))
        self._index += 1

    def pop(self):
        return heapq.heappop(self._queue)[-1]




graph = {}
graph["name"] = ["a1", "a2", "a3" ]
graph["a2"] = ["b1", "b2"]
graph["b2"] = ["c1", "c2", "c3" ]

graph["c1"] = []
graph["c2"] = []
graph["c3"] = []


def search(name):
    search_queue = deque()
    search_queue += graph[name]
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
