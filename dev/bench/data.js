window.BENCHMARK_DATA = {
  "lastUpdate": 1609967826751,
  "repoUrl": "https://github.com/dekellum/tokio",
  "entries": {
    "sync_rwlock": [
      {
        "commit": {
          "author": {
            "email": "liaoymxsdl@sina.com",
            "name": "Rust大闸蟹",
            "username": "baoyachi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e42317b072c5240fe190c0a8708cd24bb4a4eb08",
          "message": "chore: remove macro_rules semicolon (#3381)\n\nfix build warning",
          "timestamp": "2021-01-06T15:46:37+09:00",
          "tree_id": "afddb1695c354a4f98712745b23363ef96774bc8",
          "url": "https://github.com/dekellum/tokio/commit/e42317b072c5240fe190c0a8708cd24bb4a4eb08"
        },
        "date": 1609967825901,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 843,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 12929,
            "range": "± 3061",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 871,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 13248,
            "range": "± 2313",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 495,
            "range": "± 15",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}