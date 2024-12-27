import db from "./connection"
import { posts } from "./schema/posts"
import { users } from "./schema/users"

const lorem:string = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada mi nisi, ac gravida orci pretium vitae. Sed tincidunt lacus ut nulla ultricies, sed semper massa varius. Proin urna nisi, volutpat vel blandit tempor, pulvinar vitae tortor. Aenean vel mauris a quam ornare rhoncus sed id tellus. Duis euismod non velit non fermentum. Mauris orci nisl, sodales eu magna sed, convallis efficitur sem. Nulla vitae nisl ac magna convallis malesuada at ut massa. Curabitur vulputate aliquam eros eget tempus. Fusce eu nulla luctus, ultrices elit at, congue augue. Proin dolor sapien, feugiat eget dictum in, rhoncus a mi. Praesent vestibulum tortor eu sem eleifend, nec porta magna ultricies. Donec hendrerit, dui ut placerat suscipit, purus quam laoreet ante, quis tempor justo ipsum vel elit. Mauris dictum pharetra molestie. Vivamus et ultrices lorem. Mauris ex arcu, placerat ac ultrices nec, blandit cursus nisi. Duis vehicula nulla a risus euismod, vel imperdiet justo lacinia.

Vestibulum vitae fringilla diam. Fusce bibendum tempor nisi, et vehicula diam feugiat eget. Curabitur fermentum sem a nisi porttitor vehicula. Nunc nec tempus erat, a posuere arcu. Pellentesque id ultrices odio. Donec facilisis neque a sem luctus feugiat. Morbi luctus rhoncus mi, a porta purus bibendum vitae.

Etiam condimentum ornare nibh. Morbi augue metus, vulputate ut magna non, mollis tempor nulla. Sed facilisis eget lectus sit amet tristique. Praesent eu aliquet eros, vitae sollicitudin lacus. Morbi a lectus iaculis, dictum dui id, dapibus orci. Sed fermentum, nisl sed pellentesque vulputate, leo orci porta felis, nec tincidunt tellus magna id odio. Pellentesque sit amet quam pharetra, tempor ante consequat, consequat nibh. Aenean vel eleifend orci. Praesent et porttitor risus. Phasellus pellentesque faucibus enim eget vehicula. Integer vestibulum metus sed lacus accumsan condimentum. Vivamus rhoncus sit amet ipsum at posuere. Maecenas nisl elit, congue et justo suscipit, scelerisque posuere urna. Maecenas porta, quam lacinia vestibulum malesuada, justo purus blandit lorem, sed sollicitudin risus magna sed leo. Morbi vel nibh in lectus euismod fringilla sit amet eget erat. Nunc venenatis in augue vitae interdum.

Aenean vel velit eget neque ultricies interdum. Cras velit nisi, bibendum et leo eget, accumsan suscipit risus. Aenean neque lorem, porta non tincidunt et, feugiat quis nisi. Donec non arcu justo. Etiam egestas eget mauris quis tristique. Curabitur tristique convallis felis, at ornare sapien sollicitudin ac. Ut lobortis lacinia convallis. Donec ultricies, diam sed luctus viverra, tortor justo convallis mi, eu condimentum massa lacus vitae leo. Donec molestie leo ac mi sagittis, a elementum eros condimentum. In tristique fermentum diam et hendrerit. Fusce et orci quis lorem luctus congue. Etiam eget ipsum nec lectus varius consectetur. Nunc sit amet erat turpis. Aliquam venenatis varius justo, aliquet mattis ex consequat id. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

Sed in quam eu nisi commodo fringilla. Morbi pharetra id ligula ut vulputate. Morbi pulvinar dolor odio, sit amet maximus dui porta id. Etiam sem orci, molestie ut dignissim et, cursus tincidunt justo. Nulla facilisi. Fusce a convallis sapien, ut iaculis ligula. Maecenas eleifend fermentum diam ut commodo. Aliquam vitae mauris sapien. Quisque in neque et dolor sollicitudin auctor id sed lorem. Nunc cursus imperdiet molestie. Vestibulum interdum dui non massa iaculis semper.`

export async function insertUsers() {
    for (let i = 1; i <= 20; i++) {
        await db.insert(users).values({ name: "name", age: Math.random() * 80 + 1, email: `mail${i}@mail.com` })
    }
}

export async function insertPosts() {
    for (let i = 1; i <= 100; i++) {
        await db.insert(posts).values({
            content: `${lorem} ${i}`,
            authorId: Math.floor(Math.random() * 20 + 1),
        })
    }
}

(async () => {
    await insertUsers();
    await insertPosts();
    console.log("Tabelas populadas");
})();
