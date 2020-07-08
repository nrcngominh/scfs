cd "$(dirname "$0")"
cd ..

sudo rm -rf .docker
mkdir -p .docker/data
cp -rf database/images .docker/data/images