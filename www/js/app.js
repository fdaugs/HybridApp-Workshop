angular.module('ionicApp', ['ionic', 'ngCordova'])

.controller('AppCtrl', function ($scope, $cordovaCamera, $cordovaFile) {

    ionic.Platform.ready(function () {
        navigator.splashscreen.hide();
    });

    $scope.takePicture = function () {
        var options = {
            quality: 75,
            destinationType: Camera.DestinationType.DATA_URL,
            sourceType: Camera.PictureSourceType.CAMERA,
            allowEdit: true,
            encodingType: Camera.EncodingType.JPEG,
            targetWidth: 300,
            targetHeight: 300,
            popoverOptions: CameraPopoverOptions,
            saveToPhotoAlbum: false,
            correctOrientation: true
        };


        $cordovaCamera.getPicture(options).then(function (imageData) {
            $scope.imgURI = "data:image/jpeg;base64," + imageData;
        }, function (err) {
            // An error occured. Show a message to the user
        });
    };

    $scope.valid = true;

    $scope.formData = {};

    $scope.onTouch = function (item, event) {
        var name = $scope.formData.string;

        if (name === "Curryking") {
            $scope.valid = true;
            alert("Herzlichen Glückwunsch du bist drin!");
        } else {
            $scope.valid = false;
        }
    };

    $scope.focused = function () {
       $scope.isFocus=true;
    }

    $scope.blurred = function () {
        $scope.isFocus=false;
    }



});

window.addEventListener("orientationchange", function () {
    // Announce the new orientation number
    if (window.orientation === 90) {
        alert("Dreh das Ding zurrück du Eierkopp, das ist für Landscape nicht optimiert!");
    }
}, false);