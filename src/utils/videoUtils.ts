/**
 * Utility functions for video handling and optimization
 */

export const isVideoSupported = (): boolean => {
  const video = document.createElement('video');
  return !!(video.canPlayType && video.canPlayType('video/mp4').replace(/no/, ''));
};

export const canAutoplay = async (): Promise<boolean> => {
  try {
    const video = document.createElement('video');
    video.muted = true;
    video.src = 'data:video/mp4;base64,AAAAIGZ0eXBpc29tAAACAGlzb21pc28yYXZjMWF2YzEAAAAIZnJlZQAAAr1tZGF0AAACrgYF//+q3EXpvebZSLeWLNgg2SPu73gyNjQgLSBjb3JlIDE0OCByMjYwMSBNIGEzZjRhMDMgLSBILjI2NC9NUEVHLTQgQVZDIGNvZGVjIC0gQ29weWxlZnQgMjAwMy0yMDE2IC0gaHR0cDovL3d3dy52aWRlb2xhbi5vcmcveDI2NC5odG1sIC0gb3B0aW9uczogY2FiYWM9MSByZWY9MyBkZWJsb2NrPTE6MDowIGFuYWx5c2U9MHgzOjB4MTEzIG1lPWhleCBzdWJtZT03IHBzeT0xIHBzeV9yZD0xLjAwOjAuMDAgbWl4ZWRfcmVmPTEgbWVfcmFuZ2U9MTYgY2hyb21hX21lPTEgdHJlbGxpcz0xIDh4OGRjdD0xIGNxbT0wIGRlYWR6b25lPTIxLDExIGZhc3RfcHNraXA9MSBjaHJvbWFfcXBfb2Zmc2V0PS0yIHRocmVhZHM9MSBsb29rYWhlYWRfdGhyZWFkcz0xIHNsaWNlZF90aHJlYWRzPTAgbnI9MCBkZWNpbWF0ZT0xIGludGVybGFjZWQ9MCBibHVyYXlfY29tcGF0PTAgY29uc3RyYWluZWRfaW50cmE9MCBiZnJhbWVzPTMgYl9weXJhbWlkPTIgYl9hZGFwdD0xIGJfYmlhcz0wIGRpcmVjdD0xIHdlaWdodGI9MSBvcGVuX2dvcD0wIHdlaWdodHA9MiBrZXlpbnQ9MjUwIGtleWludF9taW49MjUgc2NlbmVjdXQ9NDAgaW50cmFfcmVmcmVzaD0wIHJjX2xvb2thaGVhZD00MCByYz1jcmYgbWJ0cmVlPTEgY3JmPTIzLjAgcWNvbXA9MC42MCBxcG1pbj0wIHFwbWF4PTY5IHFwc3RlcD00IGlwX3JhdGlvPTEuNDAgYXE9MToxLjAwAIAAAAFZZYiEACD/2lu4BjCEQNgkRcMeEc8AAAADAAADAAVHxYEABaXiIgAAAg==';
    
    await video.play();
    return true;
  } catch {
    return false;
  }
};

export const getOptimalVideoFormat = (basePath: string): string[] => {
  const formats = [];
  
  // Add WebM format for better compression (if supported)
  if (isWebMSupported()) {
    formats.push(basePath.replace('.mp4', '.webm'));
  }
  
  // Always include MP4 as fallback
  formats.push(basePath);
  
  return formats;
};

export const isWebMSupported = (): boolean => {
  const video = document.createElement('video');
  return !!(video.canPlayType && video.canPlayType('video/webm').replace(/no/, ''));
};

export const preloadVideo = (src: string): Promise<HTMLVideoElement> => {
  return new Promise((resolve, reject) => {
    const video = document.createElement('video');
    video.preload = 'metadata';
    video.muted = true;
    
    video.addEventListener('loadeddata', () => resolve(video));
    video.addEventListener('error', reject);
    
    video.src = src;
  });
};

export const getVideoMetadata = (video: HTMLVideoElement) => {
  return {
    duration: video.duration,
    width: video.videoWidth,
    height: video.videoHeight,
    aspectRatio: video.videoWidth / video.videoHeight,
  };
};