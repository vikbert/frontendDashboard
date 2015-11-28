<?php 


// execute the test and dump the output to text file 

$out = shell_exec("coreTest/vendor/bin/codecept run --html"); 
echo file_get_contents(__DIR__. '/../coreTest/tests/_output/report.html');