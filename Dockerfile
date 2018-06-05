FROM arablocks/ann
WORKDIR /opt/signalhub/
ADD . /opt/signalhub/
ENTRYPOINT [ "ann",  "-t", "." ]
