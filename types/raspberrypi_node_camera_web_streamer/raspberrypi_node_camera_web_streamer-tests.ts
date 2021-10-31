import { VideoStream, CameraOptions } from 'raspberrypi_node_camera_web_streamer';
import { Express } from 'express-serve-static-core';

const app: Express = {} as any;
const cameraOptions: CameraOptions = {
    width: 1280,
    height: 720,
    fps: 16,
    encoding: 'JPEG',
    quality: 7,
};
const resourcePath = '/stream.mjpg';

cameraOptions.width; // $ExpectType number
cameraOptions.height; // $ExpectType number
cameraOptions.fps; // $ExpectType number
cameraOptions.quality; // $ExpectType number
cameraOptions.encoding; // $ExpectType string

VideoStream.acceptConnections(app, cameraOptions, resourcePath, false); // $ExpectType void
VideoStream.acceptConnections(app, cameraOptions, resourcePath, 'false'); // $ExpectError
VideoStream.acceptConnections(app, cameraOptions, null, false); // $ExpectError
VideoStream.acceptConnections(app, {}, resourcePath, false); // $ExpectError

// Express app is required
VideoStream.acceptConnections(null, cameraOptions, resourcePath, false); // $ExpectError

// camera options, path and verbose loggin flat are optional
VideoStream.acceptConnections(app, undefined, undefined, undefined);
