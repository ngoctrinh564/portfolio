@echo off
setlocal EnableExtensions

title Portfolio - Push and Deploy to GitHub Pages

echo.
echo ============================================================
echo   Portfolio - Push and Deploy to GitHub Pages
echo ============================================================
echo.

where git >nul 2>nul
if errorlevel 1 (
  echo [ERROR] Git is not installed or is not available in PATH.
  goto :fail
)

where npm >nul 2>nul
if errorlevel 1 (
  echo [ERROR] npm is not installed or is not available in PATH.
  goto :fail
)

if not exist package.json (
  echo [ERROR] package.json was not found. Please run this file from the project root.
  goto :fail
)

for /f "delims=" %%b in ('git branch --show-current 2^>nul') do set "CURRENT_BRANCH=%%b"
if "%CURRENT_BRANCH%"=="" (
  echo [ERROR] Could not detect the current Git branch.
  goto :fail
)

echo Current branch: %CURRENT_BRANCH%
echo Remote: origin
echo.

set "COMMIT_MESSAGE="
set /p "COMMIT_MESSAGE=Enter commit message: "

if "%COMMIT_MESSAGE%"=="" (
  echo [ERROR] Commit message cannot be empty.
  goto :fail
)

echo.
echo [1/5] Running production build...
call npm run build
if errorlevel 1 (
  echo.
  echo [ERROR] Build failed. Nothing was committed or deployed.
  goto :fail
)

echo.
echo [2/5] Staging changes...
git add -A
if errorlevel 1 (
  echo [ERROR] Failed to stage changes.
  goto :fail
)

git diff --cached --quiet
if not errorlevel 1 (
  echo.
  echo [INFO] No changes to commit. Deploy was cancelled.
  goto :done
)

echo.
echo [3/5] Creating commit...
git commit -m "%COMMIT_MESSAGE%"
if errorlevel 1 (
  echo.
  echo [ERROR] Commit failed.
  goto :fail
)

echo.
set "CONFIRM_DEPLOY="
set /p "CONFIRM_DEPLOY=Deploy to GitHub Pages now? Type y or Y, then press Enter: "

if /I not "%CONFIRM_DEPLOY%"=="Y" (
  echo.
  echo [INFO] Commit created, but deploy was cancelled. You can push later.
  goto :done
)

echo.
echo [4/5] Pushing to GitHub...
git push origin %CURRENT_BRANCH%
if errorlevel 1 (
  echo.
  echo [ERROR] Push failed. GitHub Pages deploy was not triggered.
  goto :fail
)

echo.
echo [5/5] Deploy triggered.
echo GitHub Actions will build and publish the site from branch: %CURRENT_BRANCH%
echo.
goto :done

:fail
echo.
echo Process failed.
pause
exit /b 1

:done
echo Done.
pause
exit /b 0
