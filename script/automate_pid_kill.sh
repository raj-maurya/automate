#!/bin/bash


processId=$(ps -ef | grep 'your_proframme_name_that_you_want_to_kill' | grep -v 'grep' | awk '{ printf $2 }')

if [ -z "$processId" ]; then
 echo "Process you searched is not running!"


else
 kill -9 $processId
echo "Process has been  killed!"
fi
