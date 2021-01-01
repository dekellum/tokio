cfg_spawn_blocking! {
    pub(crate) use crate::runtime::spawn_blocking;
    pub(crate) use crate::task::JoinHandle;
}

cfg_not_rt! {
    use std::fmt;
    use std::future::Future;
    use std::pin::Pin;
    use std::task::{Context, Poll};

    pub(crate) struct JoinHandle<R> {
        _p: std::marker::PhantomData<R>,
    }

    unsafe impl<T: Send> Send for JoinHandle<T> {}
    unsafe impl<T: Send> Sync for JoinHandle<T> {}

    impl<R> Future for JoinHandle<R> {
        type Output = Result<R, std::io::Error>;

        fn poll(self: Pin<&mut Self>, _cx: &mut Context<'_>) -> Poll<Self::Output> {
            unreachable!()
        }
    }

    impl<T> fmt::Debug for JoinHandle<T>
    where
        T: fmt::Debug,
    {
        fn fmt(&self, fmt: &mut fmt::Formatter<'_>) -> fmt::Result {
            fmt.debug_struct("JoinHandle").finish()
        }
    }
}

#[cfg(all(not(feature = "rt"), feature = "spawn-blocking"))]
#[allow(unused)]
pub(crate) fn spawn_blocking<F, R>(_f: F) -> JoinHandle<R>
where
    F: FnOnce() -> R + Send + 'static,
    R: Send + 'static,
{
    assert_send_sync::<JoinHandle<std::cell::Cell<()>>>();
    panic!("requires the `rt` and `spawn-blocking` Tokio feature flags")
}

#[cfg(all(not(feature = "rt"), feature = "spawn-blocking"))]
fn assert_send_sync<T: Send + Sync>() {
}
