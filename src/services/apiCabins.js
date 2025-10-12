import supabase from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.error("Cabins couldn't be loaded");
    throw new Error("Cabins could not be loaded");
  }

  return data;
}
