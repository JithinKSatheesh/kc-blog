import logo from './logo.svg';
import './App.css';

import {
  Routes,
  Route,
} from "react-router-dom";

import Home from './Pages/Home';

import Novels from './Pages/Novels/content'
import NovelChapter from './Pages/Novels/chapter'
import NovelReader from './Pages/Novels/Reader'

import Worlds from 'Pages/Worlds/content'
import WorldsReader from 'Pages/Worlds/Reader'

import Poems from 'Pages/poems/content'
import PoemsReader from 'Pages/poems/Reader'

import Shorts from 'Pages/Shorts/content'
import ShortsReader from 'Pages/Shorts/Reader'

import {StateProvider as ContentProvider} from 'Store/contentStore'

function App() {
  return (
    <div className="App">
      <ContentProvider>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/novels" element={<Novels />} />

          <Route path="/novels/:chapterId" element={<NovelChapter />} />
          <Route path="/novels/:chapterId/:contentId" element={<NovelReader />} />

          <Route path="/worlds" element={<Worlds />} />
          <Route path="/worlds/:contentId" element={<WorldsReader />} />

          <Route path="/poems" element={<Poems />} />
          <Route path="/poems/:contentId" element={<PoemsReader />} />

          <Route path="/shorts" element={<Shorts />} />
          <Route path="/shorts/:contentId" element={<ShortsReader />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
      </ContentProvider>
    </div>
  );
}

export default App;
