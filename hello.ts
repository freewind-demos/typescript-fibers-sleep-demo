import * as Fiber from 'fibers';

function sleep(ms: number) {
  const fiber = Fiber.current;
  setTimeout(() => {
    fiber.run();
  }, ms);
  Fiber.yield();
}

Fiber(() => {
  console.log('wait ... ' + new Date);
  sleep(1000);
  console.log('ok ... ' + new Date);
}).run();

console.log('Back to main')
