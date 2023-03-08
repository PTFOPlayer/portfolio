import React from "react";
import projects_data from "../../assets/projects.json"
import "./postslist.scss"

export function QuickSort(arr: Array<number | String>, start: number = 0, end: number = arr.length): Array<number | String> {
  if (start < end) {
    let p = partition(arr, start, end);
    QuickSort(arr, start, p - 1);
    QuickSort(arr, p + 1, end);
  }
  return arr;
}

function partition(arr: Array<number | String>, start: number = 0, end: number = arr.length) {
  let pivot: number | String = arr[start];
  let swapIndex: number = start;
  for (let i = start + 1; i < end; i++) {
    if (arr[i] < pivot) {
      swapIndex++;
      [arr[i], arr[swapIndex]] = [arr[swapIndex], arr[i]]
    }
  }
  [arr[start], arr[swapIndex]] = [arr[swapIndex], arr[start]]
  return swapIndex;
}

export default function PostsList() {
  let data = projects_data.projects
  let titles = data.map(e => e.title)
  let posts = QuickSort(titles)
  return (
    <div className="post_list">
      <h2> Projects List</h2>
      <div>
        {posts.map(e => (<p>{e}</p>))}
      </div>
    </div>
  )
}