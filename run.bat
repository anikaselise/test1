@echo off

REM Array of suites
set "suites=login uidgenerate dashboard pwa usercreate fileupload"

REM Loop through the array and run npm commands
for %%s in (%suites%) do (
    call npm run %%s
)

REM Generate and serve Allure report
call npm run publish