echo "Installing NPM dependecies defined in package.json..."
npm install

echo "Tidying up..."
del /S /F .git
del README.md
del scss\mixins\README.md
del scss\modules\README.md

echo "Setting up your git..."
git init
git add . -A
git commit -m "Initial Commit"

echo "Done. Goodbye cruel world!"
start /b "" cmd /c del "%~f0"&exit /b