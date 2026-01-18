const deepfaceURL = "http://209.38.2.186:5005/";

const models = [
  "VGG-Face",
  "Facenet",
  "Facenet512",
  "OpenFace",
  "DeepFace",
  "DeepID",
  "ArcFace",
  "Dlib",
  "SFace",
  "GhostFaceNet",
  "Buffalo_L",
];

const backends = [
  "opencv",
  "ssd",
  "dlib",
  "mtcnn",
  "fastmtcnn",
  "retinaface",
  "mediapipe",
  "yolov8n",
  "yolov8m",
  "yolov8l",
  "yolov11n",
  "yolov11s",
  "yolov11m",
  "yolov11l",
  "yolov12n",
  "yolov12s",
  "yolov12m",
  "yolov12l",
  "yunet",
  "centerface",
];

const metrics = ["cosine", "euclidean", "euclidean_l2", "angular"];

export const deepface = {
  verify,
};

async function verify(image1Base64: string, image2Base64: string) {
  const response = await fetch(`${deepfaceURL}/verify`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model_name: models[2],
      detector_backend: backends[5],
      distance_metric: metrics[0],
      align: true,
      img1: image1Base64,
      img2: image2Base64,
      enforce_detection: true,
      anti_spoofing: true,
    }),
  });

  console.log(response);
  // const data = await response.json();

  // if (response.status !== 200) {
  //   console.log(data.error);
  //   return;
  // }

  // console.log(data);
}
