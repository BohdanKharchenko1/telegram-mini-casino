import { createRef, useRef, useState, type RefObject } from 'react';
import { Box } from '@mui/material';
import WebApp from '@twa-dev/sdk';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import NavBar from '../components/NavBar.tsx';
import GamePage from '../features/game/GamePage.tsx';
import ProfilePage from '../features/profile/ProfilePage.tsx';
import useGameSocket from '../hooks/useGameSocket.ts';

export default function App() {
  useGameSocket();
  WebApp.expand();
  const transitionLock = useRef(false);
  const [page, setPage] = useState<number>(2);
  const [direction, setDirection] = useState<'left' | 'right'>('right');
  const nodeRefMap = useRef<Map<number, RefObject<HTMLDivElement | null>>>(
    new Map(),
  );

  const getNodeRef = (key: number) => {
    if (!nodeRefMap.current.has(key)) {
      nodeRefMap.current.set(key, createRef<HTMLDivElement>());
    }

    return nodeRefMap.current.get(key)!;
  };

  const handleChange = (nextPage: number) => {
    if (transitionLock.current) return;
    if (nextPage === page) return;

    transitionLock.current = true;
    setDirection(page > nextPage ? 'right' : 'left');
    setPage(nextPage);
  };

  const nodeRef = getNodeRef(page);

  return (
    <>
      <Box
        sx={{
          position: 'relative',
          height: '100vh',
          overflowX: 'hidden',
          overflowY: 'hidden',
        }}
      >
        <SwitchTransition mode="in-out">
          <CSSTransition
            key={page}
            timeout={300}
            classNames={`slide-${direction}`}
            unmountOnExit
            nodeRef={nodeRef}
            onExited={() => (transitionLock.current = false)}
          >
            <Box ref={nodeRef} sx={{ position: 'absolute', inset: 0 }}>
              <Box
                sx={{
                  height: '100%',
                  overflowY: 'auto',
                  WebkitOverflowScrolling: 'touch',
                }}
              >
                {page === 0 && <GamePage />}
                {page === 1 && <GamePage />}
                {page === 2 && <ProfilePage />}
              </Box>
            </Box>
          </CSSTransition>
        </SwitchTransition>
      </Box>
      <NavBar page={page} onChange={handleChange} />
    </>
  );
}
