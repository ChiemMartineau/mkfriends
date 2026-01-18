const { DEEPFACE_URL } = process.env;

if (!DEEPFACE_URL) {
  throw new Error("Missing Deepface URL");
}

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

async function verify(image1Url: string, image2Url: string): Promise<boolean> {
  const reqBody = JSON.stringify({
      model_name: models[6],
      detector_backend: backends[5],
      distance_metric: metrics[0],
      align: true,
      img1: image1Url,
      img2: image2Url,
      enforce_detection: true,
      anti_spoofing: false,
    });
    
  const response = await fetch(`${DEEPFACE_URL}/verify`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: reqBody,
  });

  const data = await response.json();
  
  return data.verified;

  // if (response.status !== 200) {
  //   console.log(data.error);
  //   return;
  // }

  // console.log(data);
}
