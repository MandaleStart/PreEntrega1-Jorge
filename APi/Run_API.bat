@echo off

:menu
echo =======================================================================
echo ^|                      Seleccione una opcion:                        ^|
echo ^|====================================================================^|
echo ^|  [1] Iniciar app.js    [PERSISTENCIA]		                     ^|
echo ^|  [2] Iniciar app.legacy.js  [MEMORIA(TEMPORAL)]    	             ^|
echo ^|  [3] Salir                                                         ^|
echo ^|====================================================================^|
set /p option=Ingrese el numero de opcion:

if "%option%"=="1" (
  start "" node app.js
pause
) else if "%option%"=="2" (
  start "" node app.legacy.js
pause
) else if "%option%"=="3" (
  exit
) else (
  echo =======================================================================
  echo ^|                Opcion invalida. Intente nuevamente.               ^|
  echo =======================================================================
  pause
  goto menu
)

goto menu
