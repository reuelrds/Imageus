pipeline {
  agent any
    stages {
      stage('One') {
        steps {
          echo 'Hi! I\'m Arimus. I\'m testing my first pipeline'
        }
      }
      stage('Two') {
        steps {
          input('Do you want to proceed?')
        }
      }
      stage('Three') {
        when {
          not {
            branch 'master'
          }
        }
        steps {
          echo "Branch name is not master"
        }
      }
      stage('Four') {
        parallel {
          stage('Unit Test') {
            steps {
              echo "Running unit test..."
            }
          }
          stage("Integration Test") {
            agent {
              docker {
                reuseNode false
                image "ubuntu"
              }
            }
            steps {
              echo "Running integration test..."
            }
          }
        }
      }
    }
}
