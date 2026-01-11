import UserPage from './pages/UserPage.tsx';
import WebApp from '@twa-dev/sdk';
import GamePage from './pages/GamePage.tsx';
import { createRef, useRef, useState, type RefObject } from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import { Box } from '@mui/material';
import NavBar from './components/NavBar.tsx';

export default function App(){
    WebApp.expand();
    const [page, setPage] = useState<number>(2);
    const [direction, setDirection] = useState<'left' | 'right'>('right');
    const nodeRefMap = useRef<Map<number, RefObject<HTMLDivElement | null>>>(new Map());

    const getNodeRef = (key: number) => {
      if (!nodeRefMap.current.has(key)) {
        nodeRefMap.current.set(key, createRef<HTMLDivElement>());
      }
      return nodeRefMap.current.get(key)!;
    };

    const handleChange = (nextPage: number) => {
      setDirection(page > nextPage ? 'right' : 'left');
      setPage(nextPage);

    }

    const nodeRef = getNodeRef(page);

    return (
      <>
      <Box
        sx={{
          position: "relative",
          height: "100vh",
          overflowX: "hidden",
          overflowY: "hidden",
        }}
      >
        <SwitchTransition mode="in-out">
          <CSSTransition
            key={page}
            timeout={300}
            classNames={`slide-${direction}`}
            unmountOnExit
            nodeRef={nodeRef}
          >
            <Box ref={nodeRef} sx={{ position: "absolute", inset: 0 }}>
              <Box
                sx={{
                  height: "100%",
                  overflowY: "auto",
                  WebkitOverflowScrolling: "touch",
                }}
              >
                {page === 0 && <GamePage />}
                {page === 1 && <GamePage/>}
                {page === 2 && <UserPage />}

              </Box>

            </Box>
          </CSSTransition>
        </SwitchTransition>
      </Box>
      <NavBar page={page} onChange={handleChange} />
      </>
    )

}
