module.exports = {
  apps: [{
    name: 'interstellar',
    script: './index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-13-58-38-165.us-east-2.compute.amazonaws.com',
      key: '~/.ssh/dynasty.pem',
      ref: 'origin/master',
      repo: 'https://github.com/larobertson/proxyserver-desc.git',
      path: '/home/ubuntu/interstellar',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}