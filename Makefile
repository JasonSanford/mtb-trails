all: get combine

get:
	./get_trails.sh

combine:
	./combine_trails.js

.PHONY: get combine
