import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { LanguageProvider } from './context/LanguageContext'
import './index.css'

// #region agent log
const startTime = performance.now();
fetch('http://127.0.0.1:7245/ingest/6147d4bf-38cf-4813-a7cf-c17b416a0e57',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'main.jsx:start',message:'React app starting to render',data:{startTime,navigationStart:performance.timing?.navigationStart},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'H2',runId:'post-fix-2'})}).catch(()=>{});

// Track FCP
if (typeof PerformanceObserver !== 'undefined') {
  const fcpObserver = new PerformanceObserver((list) => {
    list.getEntries().forEach(entry => {
      if (entry.name === 'first-contentful-paint') {
        fetch('http://127.0.0.1:7245/ingest/6147d4bf-38cf-4813-a7cf-c17b416a0e57',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'main.jsx:fcp',message:'First Contentful Paint',data:{fcpTime:entry.startTime},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'H1-H4',runId:'post-fix-2'})}).catch(()=>{});
      }
    });
  });
  fcpObserver.observe({ type: 'paint', buffered: true });
  
  // Track Long Tasks (H10)
  const longTaskObserver = new PerformanceObserver((list) => {
    list.getEntries().forEach(entry => {
      fetch('http://127.0.0.1:7245/ingest/6147d4bf-38cf-4813-a7cf-c17b416a0e57',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'main.jsx:longtask',message:'Long Task detected',data:{duration:entry.duration,startTime:entry.startTime,name:entry.name},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'H10',runId:'post-fix-2'})}).catch(()=>{});
    });
  });
  try { longTaskObserver.observe({ type: 'longtask', buffered: true }); } catch(e) {}
}

// Track font loading
if (document.fonts) {
  document.fonts.ready.then(() => {
    fetch('http://127.0.0.1:7245/ingest/6147d4bf-38cf-4813-a7cf-c17b416a0e57',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'main.jsx:fonts',message:'All fonts loaded',data:{fontLoadTime:performance.now()},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'H4',runId:'post-fix-2'})}).catch(()=>{});
  });
}
// #endregion

ReactDOM.createRoot(document.getElementById('root')).render(
  <LanguageProvider>
    <App />
  </LanguageProvider>
)
