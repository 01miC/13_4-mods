var os = require('os');
var time = require('./time.js');

function getOSinfo() {
    var cpu = os.cpus()[0].model,
    type = os.type(),
    release = os.release(),
    uptime = os.uptime().toString(),
    userInfo = os.userInfo();
    
        if(type === 'Darwin') {
            type = 'OSX';
        } else if(type === 'Windows_NT') {
            type = 'Windows';
        }

    console.log('System:', type);
    console.log('Release:', release);
    console.log('CPU:', cpu);
    console.log('Uptime: ', time.cal(uptime));
    console.log('User name:', userInfo.username);
    console.log('Home dir:', userInfo.homedir);

}

function ver() {
    var hostname = process.env.hostname.toString();
    var lang = process.env.lang.toString();
    var nodeversion = process.versions.node.toString();

        process.stdout.write(hostname+"\n");
        process.stdout.write(lang+"\n");
        process.stdout.write(nodeversion+"\n");
}
exports.print = getOSinfo;
exports.ver = ver;