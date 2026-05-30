import { supabase } from '../lib/supabase';
import { Course } from '../lib/types';
import CourseTile from './CourseTile';

export default async function CoursesGrid() {
  const { data, error } = await supabase
    .from('courses')
    .select('*')
    .order('created_at');

  if (error) {
    return (
      <div className="col-span-2 p-4 rounded-xl bg-red-900/20 border border-red-500/30 text-red-400">
        Failed to load courses. Please try again later.
      </div>
    );
  }

  return (
    <>
      {(data as Course[]).map((course, index) => (
        <CourseTile key={course.id} course={course} index={index} />
      ))}
    </>
  );
}