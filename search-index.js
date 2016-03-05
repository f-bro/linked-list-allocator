var searchIndex = {};
searchIndex["linked_list_allocator"] = {"doc":"","items":[[3,"Heap","linked_list_allocator","A fixed size heap backed by a linked list of free memory blocks.",null,null],[11,"empty","","Creates an empty heap. All allocate calls will return `None`.",0,{"inputs":[],"output":{"name":"heap"}}],[11,"new","","Creates a new heap with the given `bottom` and `top`. Both addresses must be valid and the\nmemory in the `[heap_bottom, heap_top)` range must not be used for anything else. This\nfunction is unsafe because it can cause undefined behavior if the given addresses are\ninvalid.",0,{"inputs":[{"name":"usize"},{"name":"usize"}],"output":{"name":"heap"}}],[11,"allocate_first_fit","","Allocates a chunk of the given size with the given alignment. Returns a pointer to the\nbeginning of that chunk if it was successful. Else it returns `None`.\nThis function scans the list of free memory blocks and uses the first block that is big\nenough. The runtime is in O(n) where n is the number of free blocks, but it should be\nreasonably fast for small allocations.",0,{"inputs":[{"name":"heap"},{"name":"usize"},{"name":"usize"}],"output":{"name":"option"}}],[11,"deallocate","","Frees the given allocation. `ptr` must be a pointer returned\nby a call to the `allocate_first_fit` function with identical size and alignment. Undefined\nbehavior may occur for invalid arguments, thus this function is unsafe.",0,null],[11,"bottom","","Returns the bottom address of the heap.",0,{"inputs":[{"name":"heap"}],"output":{"name":"usize"}}],[11,"top","","Returns the top address of the heap.",0,{"inputs":[{"name":"heap"}],"output":{"name":"usize"}}]],"paths":[[3,"Heap"]]};
initSearch(searchIndex);
