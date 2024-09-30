
use wasm_bindgen::prelude::*;
use wee_alloc::WeeAlloc;

#[wasm_bindgen]
pub fn greet(str: &str) {
    println!("{}", str)
}
fn main() {
    println!("Hello, world!");
    greet("hello")
}
