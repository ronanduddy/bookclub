.PHONY: run stop build shell

run:
	@docker-compose up

stop:
	@docker-compose down

build:
	@docker-compose build

shell:
	@docker-compose run --rm web sh
