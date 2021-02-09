# Bookclub

This is a toy Bookclub WIP app.

## Installation

A prerequisite is to [install Docker](https://docs.docker.com/get-docker/). After which you can clone this repo.

To setup everything run
```Shell
make setup
```

A completely fresh or clean setup takes ~5mins. Afterwards you should be able to go to http://0.0.0.0:3000/books to use the app.

## Usage

The following command will start Rails with Postgres
```Shell
make run
```

To stop the running containers, in a different terminal window run
```Shell
make stop
```

It is also possible to SSH it the docker container by running
```Shell
make shell
```

Seed reset the database if anything unfortunate has happened with it
```Shell
make reset_db
```

For help on Docker commands, for example pruning images, containers, networks and volumnes see DigitalOcean's handy [material](https://www.digitalocean.com/community/tutorials/how-to-remove-docker-images-containers-and-volumes).

## Development

To run all the tests run
```Shell
make test
```

To run guard for development
```Shell
make guard
```

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/ronanduddy/bookclub. Please read [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) for details on our code of conduct.

## License

This project is licensed under the MIT Licence - see the [LICENSE.md](LICENSE.md) file for details
