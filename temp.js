function taskScheduling2(tasks, times, requirements) {
  /*
  
  a->b
  c->b
  b->d
  
                      a    c
                        \ /
                         b
                         |
                         d
                         
                         adjList
  build a graph {node: [neighbors]}
  {a:[b], c:[b], b:[d]}
  
  build a countParents map {a:0, c:0, b:2, d:1}
  build a distances map
  
  distances map { node => Max (time of cur node + time of all previous nodes so far))
  
  taskTimes map: just a 1 to 1 mapping between tasks and times
  
  times = 1, 1, 2, 1
  a=>1
  b=>1
  c=>2
  d=>1
  
  1  2  1  1
  a->c->b->d              
  */
  
  let ans = 0;
  const graph = new Map(); // an adjecent list {a=>[b], c=>[b]...}
  const countParents = new Map(); // a map to count all parents of a cur task {a=>0, c=>0, b=>2...}
  const distances = new Map(); // a map between  a task and the max time of cur task + all previous task time
  const taskTimes = new Map(); // 1 to 1 mapping between tasks and times (a->1, b->1..)
  const queue = [];
  
  // build all maps
  for(let i = 0; i < tasks.length; i++){
      const task = tasks[i];
      graph.set(task, []);
      countParents.set(task, 0);
      distances.set(task, 0);
      taskTimes.set(task, times[i]);
  }
  
  // count parent tasks and set up graph & distances map based on requirements
  for(const [firstTask, secondTask] of requirements){
      graph.get(firstTask).push(secondTask);
      countParents.set(secondTask, countParents.get(secondTask) + 1);
  }
  // add all tasks with 0 parent to queue and the distances map
  for(const [task, parentCount] of countParents){
      if(parentCount === 0){
          queue.push(task);
          // configure 0 parent task with the initial distance, which is the task time
          // for example, if task a needs 1 hour, distance.get(a) should be 1
          distances.set(task, taskTimes.get(task));
          // the answer is the max time it needs to get to the current task
          // in case of task with 0 parent, it would be the task time.
          // distances = {a=>1, c=>2} then ans is 2
          ans = Math.max(distances.get(task));
      }
  }
  
  console.log("graph", graph);
  console.log('countParents', countParents);
  console.log('distances', distances);
  console.log('taskTimes', taskTimes);
 
  // use a queue, remove the tasks out, starting with tasks with 0 parent
  while(queue.length){
      const curTask = queue.shift();
      for(const childTask of graph.get(curTask)){
          // update the distances and answer here
          // we want to update the max time it takes to complete child task and all previous tasks before it
          //const timeNeededToCompleteChildTask = distances.get(curTask) + taskTimes.get(childTask);
          //const maxTimeSoFar = Math.max(distances.get(childTask), timeNeededToCompleteChildTask);
          distances.set(childTask,
                        Math.max(distances.get(childTask), distances.get(curTask) + taskTimes.get(childTask)));
          console.log('distances here', distances);
          ans = Math.max(ans, distances.get(childTask));
          
          const parentCount = countParents.get(childTask);
          // need to reduce count since we remove the parent task
          countParents.set(childTask, parentCount - 1);
          // add child task with 0 parent back to queue
          if(parentCount === 0){
              queue.push(childTask);
          }
      }
  }
  return ans;
}

function splitWords(s) {
  return s == "" ? [] : s.split(' ');
}

function* main() {
  const tasks = splitWords(yield);
  const times = splitWords(yield).map((v) => parseInt(v));
  const requirementsLength = parseInt(yield);
  const requirements = [];
  for (let i = 0; i < requirementsLength; i++) {
      requirements.push(splitWords(yield));
  }
  const res = taskScheduling2(tasks, times, requirements);
  console.log(res);
}

class EOFError extends Error {}
{
  const gen = main();
  const next = (line) => gen.next(line).done && process.exit();
  let buf = '';
  next();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', (data) => {
      const lines = (buf + data).split('\n');
      buf = lines.pop();
      lines.forEach(next);
  });
  process.stdin.on('end', () => {
      buf && next(buf);
      gen.throw(new EOFError());
  });
}
