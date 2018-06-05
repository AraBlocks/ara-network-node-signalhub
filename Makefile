DOCKER := $(shell which docker)
DOCKER_TAG := arablocks/ann-signalhub

docker: Dockerfile
	$(DOCKER) build -t $(DOCKER_TAG) .

