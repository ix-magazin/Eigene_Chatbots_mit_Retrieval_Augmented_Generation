from vectordb import Memory

memory = Memory(memory_file="./memory.txt", 
                chunking_strategy={'mode':'sliding_window', 'window_size': 80, 'overlap': 20}, 
                embeddings="normal")
memory.clear()
path = "src/training-data/digitale_souv.txt"
file = open(path, "r", encoding="utf-8")
memory.save(texts=file.read(), memory_file="./memory.txt")
memory.dump()
